
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Users, Activity } from 'lucide-react';

export const WhyAISection = () => {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-6">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
                        Why AI Adoption is No Longer Optional
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        The experimental phase is over. Businesses that integrate AI are not just cutting costs—they are scaling at speeds that manual operations cannot match.
                    </p>
                </div>

                {/* Common Mistakes Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                            <XCircle size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-3">Automating Too Early</h3>
                        <p className="text-muted-foreground text-sm">
                            Attempting to automate chaos only creates faster chaos. Optimize your processes manually first.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                            <Users size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-3">Replacing Humans Blindly</h3>
                        <p className="text-muted-foreground text-sm">
                            AI should augment your team, not replace the human touch where it matters most.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                            <Activity size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-3">Buying Tools Without Strategy</h3>
                        <p className="text-muted-foreground text-sm">
                            A cool tool is useless without a clear implementation plan and defined outcomes.
                        </p>
                    </motion.div>
                </div>

                {/* What to Automate */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-green-700 flex items-center gap-3 mb-6">
                            <CheckCircle className="w-6 h-6" /> What to Automate
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { title: "Lead Qualification", desc: "Collecting initial data and scoring leads." },
                                { title: "Routine Follow-ups", desc: "Nudging prospects who went silent." },
                                { title: "Reporting & Analytics", desc: "Aggregating data into dashboards." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                                    <div>
                                        <span className="block font-bold text-navy">{item.title}</span>
                                        <span className="text-sm text-muted-foreground">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-amber-600 flex items-center gap-3 mb-6">
                            <Users className="w-6 h-6" /> Human Touch Required
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { title: "High-Stakes Strategy", desc: "Decisions requiring nuance and context." },
                                { title: "Relationship Building", desc: "Empathy cannot be simulated perfectly." },
                                { title: "Complex Negotiations", desc: "Closing large enterprise deals." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 border border-amber-100">
                                    <div>
                                        <span className="block font-bold text-navy">{item.title}</span>
                                        <span className="text-sm text-muted-foreground">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};
