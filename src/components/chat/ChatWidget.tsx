import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

type OnboardingStep = 'type' | 'stage' | 'goal' | 'chat';

interface OnboardingData {
    type: string;
    stage: string;
    goal: string;
}

const ONBOARDING_STEPS = {
    type: {
        question: "First, what describes you best?",
        options: ["Startup", "Agency", "Established Company", "Freelancer/Individual"]
    },
    stage: {
        question: "What stage is your business at?",
        options: ["Idea Phase", "MVP / Early Stage", "Growing / Scaling", "Established"]
    },
    goal: {
        question: "What is your primary goal?",
        options: ["Get More Leads", "Automate Workflows", "Build App / Website", "Branding & Marketing"]
    }
};

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isQualified, setIsQualified] = useState(false);

    // Onboarding State
    const [step, setStep] = useState<OnboardingStep>('type');
    const [onboardingData, setOnboardingData] = useState<OnboardingData>({ type: '', stage: '', goal: '' });

    const scrollAreaRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollAreaRef.current) {
            const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollContainer) {
                scrollContainer.scrollTop = scrollContainer.scrollHeight;
            }
        }
    }, [messages, isOpen, step]);

    const handleOptionSelect = (value: string) => {
        if (step === 'type') {
            setOnboardingData(prev => ({ ...prev, type: value }));
            setStep('stage');
        } else if (step === 'stage') {
            setOnboardingData(prev => ({ ...prev, stage: value }));
            setStep('goal');
        } else if (step === 'goal') {
            const finalData = { ...onboardingData, goal: value };
            setOnboardingData(finalData);
            setStep('chat');

            // Construct the initial message context invisibly or visibly
            const introMessage = `I am a ${finalData.stage} ${finalData.type} looking to ${finalData.goal}.`;
            handleSend(introMessage);
        }
    };

    const handleSend = async (messageText: string = input) => {
        if (!messageText.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: messageText };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            if (!response.ok) throw new Error('Failed to fetch response');

            const data = await response.json();
            const aiContent = data.choices[0].message.content;

            // Check for JSON output (Qualification Complete)
            try {
                const trimmed = aiContent.trim();
                // Simple check for JSON object
                if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
                    const jsonResponse = JSON.parse(trimmed);
                    console.log("Lead Qualified:", jsonResponse);
                    setMessages(prev => [...prev, { role: 'assistant', content: "Thank you! We've analyzed your needs and our team will be in touch with a tailored strategy shortly." }]);
                    setIsQualified(true);
                } else {
                    setMessages(prev => [...prev, { role: 'assistant', content: aiContent }]);
                }
            } catch (e) {
                setMessages(prev => [...prev, { role: 'assistant', content: aiContent }]);
            }

        } catch (error) {
            console.error('Chat Error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="w-[350px] md:w-[400px] h-[550px] bg-background border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b bg-muted/40 flex justify-between items-center bg-gray-50/80 backdrop-blur-sm sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-2 rounded-xl">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-navy">EliteX Intelligence</h3>
                                    <p className="text-xs text-muted-foreground font-medium">Growth Assistant</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-200/50 rounded-full" onClick={() => setIsOpen(false)}>
                                <X className="w-4 h-4 text-gray-500" />
                            </Button>
                        </div>

                        {/* Content Area */}
                        <ScrollArea ref={scrollAreaRef} className="flex-1 bg-white">
                            <div className="p-4 flex flex-col gap-4 min-h-full">

                                {/* Onboarding Mode */}
                                {step !== 'chat' ? (
                                    <div className="flex flex-col flex-1 justify-center gap-6 py-8 animate-in fade-in duration-500">
                                        <div className="space-y-2 text-center">
                                            <h4 className="text-xl font-bold text-navy">
                                                {ONBOARDING_STEPS[step].question}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                Select the best option to help us tailor our strategy.
                                            </p>
                                        </div>

                                        <div className="grid gap-3">
                                            {ONBOARDING_STEPS[step].options.map((option, idx) => (
                                                <Button
                                                    key={idx}
                                                    variant="outline"
                                                    className="h-auto py-4 px-6 justify-between text-left font-medium hover:border-primary hover:bg-primary/5 hover:text-primary transition-all group"
                                                    onClick={() => handleOptionSelect(option)}
                                                >
                                                    {option}
                                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Button>
                                            ))}
                                        </div>

                                        {/* Progress Dots */}
                                        <div className="flex justify-center gap-2 mt-4">
                                            {['type', 'stage', 'goal'].map((s, i) => (
                                                <div
                                                    key={i}
                                                    className={cn(
                                                        "w-2 h-2 rounded-full transition-colors",
                                                        i === ['type', 'stage', 'goal'].indexOf(step) ? "bg-primary" : "bg-gray-200"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    /* Chat Mode */
                                    <div className="flex flex-col gap-4 pb-4">
                                        {messages.length === 0 && isLoading && (
                                            <div className="text-center text-muted-foreground text-sm mt-8">
                                                Initializing analysis...
                                            </div>
                                        )}
                                        {messages.map((msg, idx) => (
                                            <div
                                                key={idx}
                                                className={cn(
                                                    "max-w-[85%] p-3.5 text-sm rounded-2xl shadow-sm animate-in slide-in-from-bottom-2 duration-300",
                                                    msg.role === 'user'
                                                        ? "bg-navy text-white self-end ml-8 rounded-tr-none"
                                                        : "bg-gray-100 text-gray-800 self-start mr-8 rounded-tl-none border border-gray-100"
                                                )}
                                            >
                                                {msg.content}
                                            </div>
                                        ))}
                                        {isLoading && (
                                            <div className="self-start bg-gray-100 p-4 rounded-2xl rounded-tl-none flex items-center gap-2 animate-pulse">
                                                <div className="flex gap-1">
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                </div>
                                                <span className="text-xs text-gray-400 font-medium ml-1">Thinking...</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </ScrollArea>

                        {/* Input Area (Only visible in chat mode) */}
                        {step === 'chat' && (
                            <div className="p-4 border-t bg-white">
                                {isQualified ? (
                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 rounded-xl p-6 text-center border border-green-100 flex flex-col items-center gap-3 animate-in zoom-in duration-500 shadow-sm">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-green-600 mb-1">
                                            <Sparkles className="w-6 h-6 animate-pulse" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-green-900">Analysis Complete!</h4>
                                            <p className="text-sm opacity-90 mt-1">We've identified the perfect strategy for you. An expert will be in touch shortly.</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <Input
                                            placeholder="Type your message..."
                                            value={input}
                                            onChange={e => setInput(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            disabled={isLoading}
                                            className="flex-1 rounded-xl border-gray-200 focus-visible:ring-primary/20"
                                        />
                                        <Button
                                            onClick={() => handleSend()}
                                            disabled={isLoading || !input.trim()}
                                            size="icon"
                                            className="rounded-xl shadow-sm transition-all hover:scale-105 active:scale-95"
                                        >
                                            <Send className="w-4 h-4" />
                                        </Button>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="lg"
                className="h-14 w-14 rounded-full shadow-xl p-0 hover:scale-110 transition-transform duration-200 bg-navy hover:bg-navy/90 text-white border-2 border-white/10"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </Button>
        </div>
    );
};
