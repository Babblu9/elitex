

import type { APIRoute } from 'astro';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';

export const prerender = false;

// Simple in-memory rate limit store
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 10; // 10 requests per minute

export const POST: APIRoute = async ({ request, clientAddress }) => {
    // 1. Rate Limiting Check
    const ip = clientAddress || 'unknown';
    const now = Date.now();
    const clientRate = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - clientRate.lastReset > RATE_LIMIT_WINDOW) {
        // Reset window
        clientRate.count = 1;
        clientRate.lastReset = now;
    } else {
        clientRate.count++;
    }

    rateLimitMap.set(ip, clientRate);

    if (clientRate.count > MAX_REQUESTS) {
        return new Response(JSON.stringify({ error: 'Too many requests. Please slow down.' }), {
            status: 429,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const { messages } = await request.json();

        if (!messages || !Array.isArray(messages)) {
            return new Response(JSON.stringify({ error: 'Invalid messages format' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const apiKey = import.meta.env.GROQ_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ error: 'Groq API key not configured' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const systemPrompt = `You are the “EliteX Growth Intelligence Agent”, an AI assistant embedded on the EliteX Solutions website.

Your purpose is to:
1. Understand the visitor’s business and goals
2. Identify which EliteX services are most relevant
3. Qualify the visitor as a potential lead
4. Decide the next best action for the business team

EliteX Solutions offers:
- Branding & Digital Marketing
- Web & Product Development (admin panels, dashboards, web apps)
- AI Automations & Custom AI Agents

You must behave professionally, clearly, and efficiently.
Do NOT oversell.
Do NOT provide pricing.
Do NOT give long explanations.

---

### CONVERSATION BEHAVIOR RULES

- Ask only essential follow-up questions.
- Guide the conversation toward clarity, not consultation.
- If enough information is available, stop asking questions and produce a result.
- Keep responses concise and business-focused.

---

### WHAT YOU MUST EXTRACT FROM THE USER

From the conversation, infer and extract:
- Business type (startup, agency, company, individual)
- Business stage (idea, early-stage, growing, established)
- Primary goal (leads, automation, branding, web, AI)
- Urgency level (high, medium, low)
- Budget signals if mentioned (optional)

---

### SERVICE MATCHING LOGIC

Map needs to EliteX services:
- Branding & Marketing → branding, growth, social media, content, ads
- Web & Product → website, dashboard, admin panel, platform, MVP
- AI & Automation → AI, automation, agents, workflows, lead handling

You may recommend ONE or TWO services only.

---

### LEAD QUALIFICATION RULES

Classify the lead priority:
- High → clear business need, urgency, decision-maker signals
- Medium → exploring, planning, partial clarity
- Low → learning, vague, no intent

---

### OUTPUT FORMAT (VERY IMPORTANT)

When you have enough information, output ONLY valid JSON.
Do NOT include explanations.
Do NOT include extra text.

The JSON must follow this exact schema:

{
  "business_type": "",
  "business_stage": "",
  "primary_goal": "",
  "recommended_services": [],
  "lead_priority": "",
  "summary_for_team": "",
  "next_action": ""
}

---

### NEXT ACTION VALUES (ONLY ONE)

Use one of the following:
- "book_strategy_call"
- "collect_contact_details"
- "redirect_to_services_page"
- "provide_high_level_overview"

---

### EXAMPLE INTERNAL BEHAVIOR (DO NOT SHOW USER)

User: “We want to automate lead handling for our SaaS startup.”

Internal decision:
- Service → AI Automations
- Priority → High
- Action → book_strategy_call

---

You are a business intelligence assistant, not a chatbot.
Your goal is to help EliteX Solutions qualify and convert the right clients.`;

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...messages
                ],
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Groq API Error:', errorData);
            return new Response(JSON.stringify({ error: 'Failed to communicate with Groq', details: errorData }), {
                status: response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const data = await response.json();

        // Check if the AI response is the final JSON qualification
        try {
            const aiContent = data.choices[0].message.content.trim();
            if (aiContent.startsWith('{') && aiContent.endsWith('}')) {
                const leadData = JSON.parse(aiContent);
                console.log("Lead Qualified! Saving...");

                // Asynchronously save to Supabase
                const saved = await saveLeadToSupabase(leadData);

                // Try sending email, but don't fail request if it errors
                if (saved) {
                    // Fire and forget email (or await if you want to log success)
                    // We catch errors inside the helper, so it won't throw
                    await sendEmailNotification(leadData);
                }
            }
        } catch (e) {
            // Not valid JSON or partial content, ignore
        }

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};

// Helper: Save to Supabase
async function saveLeadToSupabase(leadData: any) {
    try {
        const { error } = await supabase
            .from('leads')
            .insert([
                {
                    business_type: leadData.business_type,
                    business_stage: leadData.business_stage,
                    primary_goal: leadData.primary_goal,
                    recommended_services: leadData.recommended_services,
                    lead_priority: leadData.lead_priority,
                    summary_for_team: leadData.summary_for_team,
                    next_action: leadData.next_action,
                    raw_json: leadData
                }
            ]);

        if (error) {
            console.error('Supabase Insert Error:', error);
            return false;
        } else {
            console.log('Lead saved to Supabase successfully.');
            return true;
        }
    } catch (err) {
        console.error("Supabase Exception:", err);
        return false;
    }
}

// Helper: Send Email via Resend
async function sendEmailNotification(leadData: any) {
    const adminEmail = import.meta.env.ADMIN_EMAIL || 'onboarding@resend.dev'; // Default to Resend's testing email if not set

    try {
        const { data, error } = await resend.emails.send({
            from: 'EliteX Agent <onboarding@resend.dev>', // Use your verified domain in production
            to: [adminEmail],
            subject: `🎯 New Qualified Lead: ${leadData.business_type} (${leadData.lead_priority})`,
            html: `
                <h1>New Lead Details</h1>
                <p><strong>Business Type:</strong> ${leadData.business_type}</p>
                <p><strong>Stage:</strong> ${leadData.business_stage}</p>
                <p><strong>Goal:</strong> ${leadData.primary_goal}</p>
                <p><strong>Priority:</strong> ${leadData.lead_priority}</p>
                <br />
                <h3>Summary</h3>
                <p>${leadData.summary_for_team}</p>
                <br />
                <h3>Recommended Services</h3>
                <ul>
                    ${leadData.recommended_services.map((s: string) => `<li>${s}</li>`).join('')}
                </ul>
                <br />
                <p><strong>Next Action:</strong> ${leadData.next_action}</p>
            `
        });

        if (error) {
            console.error('Resend Email Error:', error);
        } else {
            console.log('Email notification sent:', data);
        }
    } catch (err) {
        console.error('Resend Exception (Fallback - Lead already saved):', err);
    }
}
