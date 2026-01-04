
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
    {
        type: "EdTech Startup",
        title: "Branding + AI Onboarding",
        badge: "Pilot / Internal Case",
        problem: "We helped an early-stage EdTech startup clarify its brand and automate onboarding.",
        whatWeDid: [
            "Brand positioning + landing page",
            "AI onboarding assistant"
        ],
        results: [
            { label: "Onboarding Completion", value: "+38%" },
            { label: "Manual Effort", value: "-60%" }
        ],
        color: "bg-blue-50/50 border-blue-100",
        accent: "text-blue-600"
    },
    {
        type: "Local Business",
        title: "AI WhatsApp Agent",
        badge: null,
        problem: "A local service business was missing calls and losing leads due to slow response times.",
        whatWeDid: [
            "AI WhatsApp agent setup",
            "Automated appointment booking"
        ],
        results: [
            { label: "Lead Response Speed", value: "2.4x" },
            { label: "Appt. Conversions", value: "+32%" }
        ],
        color: "bg-emerald-50/50 border-emerald-100",
        accent: "text-emerald-600"
    },
    {
        type: "Startup Website",
        title: "Website + Growth Stack",
        badge: null,
        problem: "Founders were spending too much time filtering bad leads from a generic website.",
        whatWeDid: [
            "Conversion-focused website",
            "AI lead qualification system"
        ],
        results: [
            { label: "Lead Quality", value: "+41%" },
            { label: "Founder Time Saved", value: "~8 hrs/wk" }
        ],
        color: "bg-indigo-50/50 border-indigo-100",
        accent: "text-indigo-600"
    }
];

export const CaseStudies = () => {
    return (
        <section className="py-24 relative bg-gray-50/50">
            <div className="container mx-auto px-6">

                {/* Layer 2 Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-navy/10 text-navy/70 bg-white rounded-full text-xs font-semibold tracking-wide uppercase">
                        Proven Results
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                        How EliteX Helps Businesses <span className="text-primary">Scale</span>
                    </h2>
                    <p className="text-navy/60 text-lg">
                        Real outcomes. No fluff.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative rounded-3xl p-8 border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full bg-white ${study.color}`}
                        >
                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`text-xs font-bold uppercase tracking-wider ${study.accent} bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm`}>
                                        {study.type}
                                    </span>
                                    {study.badge && (
                                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-sm border border-amber-100 uppercase tracking-tight">
                                            {study.badge}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-navy leading-tight group-hover:text-primary transition-colors">
                                    {study.title}
                                </h3>
                            </div>

                            {/* Problem Statement */}
                            <p className="text-navy/70 text-sm leading-relaxed mb-8 flex-1">
                                {study.problem}
                            </p>

                            {/* What We Did */}
                            <div className="mb-8">
                                <h4 className="text-xs font-bold uppercase text-navy/40 mb-3 tracking-widest">What We Did</h4>
                                <ul className="space-y-2">
                                    {study.whatWeDid.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-navy/80">
                                            <div className={`w-1.5 h-1.5 rounded-full ${study.accent.replace('text-', 'bg-')}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Results */}
                            <div className="pt-6 border-t border-navy/5">
                                <div className="grid grid-cols-2 gap-4">
                                    {study.results.map((result, i) => (
                                        <div key={i}>
                                            <div className={`text-3xl font-bold ${study.accent} tracking-tight`}>
                                                {result.value}
                                            </div>
                                            <div className="text-[11px] text-navy/40 font-bold uppercase tracking-wider mt-1">
                                                {result.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
