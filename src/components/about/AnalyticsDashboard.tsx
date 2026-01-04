
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

// --- Mock Data ---

const leadQualityData = [
    { month: 'Jan', quality: 45 },
    { month: 'Feb', quality: 52 },
    { month: 'Mar', quality: 48 },
    { month: 'Apr', quality: 61 },
    { month: 'May', quality: 75 },
    { month: 'Jun', quality: 82 },
];

const responseTimeData = [
    { name: 'Manual Process', time: 120, label: '2 hrs' },  // 120 mins
    { name: 'AI Assisted', time: 2, label: '2 mins' },     // 2 mins
];

const funnelData = [
    { name: 'Visitors', value: 5000 },
    { name: 'Qualified', value: 1200 },
    { name: 'Booked Calls', value: 450 },
];

// --- Components ---

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-navy text-white text-xs p-2 rounded-lg shadow-xl border border-white/10">
                <p className="font-semibold mb-1">{label}</p>
                <p>{`${payload[0].value}${payload[0].unit || ''}`}</p>
            </div>
        );
    }
    return null;
};

export const AnalyticsDashboard = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4" />

            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="secondary" className="mb-4 text-primary bg-primary/10 hover:bg-primary/20">
                        Internal Metrics
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                        We Think in Metrics
                    </h2>
                    <p className="text-navy/60 text-lg">
                        Representative data showing the impact of our AI-driven approach.
                    </p>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Chart 1: Lead Quality Trend */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col"
                    >
                        <div className="mb-6">
                            <h3 className="font-bold text-navy text-lg">Lead Quality Improvement</h3>
                            <p className="text-xs text-navy/50 mt-1">AI-driven qualification impact</p>
                        </div>
                        <div className="h-[250px] w-full mt-auto">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={leadQualityData}>
                                    <defs>
                                        <linearGradient id="colorQuality" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                    <YAxis hide />
                                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#2563eb', strokeWidth: 1, strokeDasharray: '4 4' }} />
                                    <Area
                                        type="monotone"
                                        dataKey="quality"
                                        stroke="#2563eb"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorQuality)"
                                        unit="%"
                                        activeDot={{ r: 6, strokeWidth: 0 }}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    {/* Chart 2: Response Time */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-navy p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden"
                    >
                        {/* Abstract circle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 w-full">
                            <h3 className="font-bold text-white text-lg mb-8">Response Time Reduction</h3>

                            <div className="flex justify-center items-end gap-12 h-[200px] pb-4">
                                {/* Manual Bar */}
                                <div className="flex flex-col items-center gap-3 w-20">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: 160 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="w-full bg-white/10 rounded-t-xl relative group"
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-white font-bold text-xl">2h</span>
                                    </motion.div>
                                    <span className="text-white/60 text-xs font-semibold uppercase tracking-wider">Manual</span>
                                </div>

                                {/* AI Bar */}
                                <div className="flex flex-col items-center gap-3 w-20">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: 40 }} // Scaled down visually, logical rep
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="w-full bg-primary rounded-t-xl relative shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-primary font-bold text-xl">2m</span>
                                    </motion.div>
                                    <span className="text-primary text-xs font-bold uppercase tracking-wider">With AI</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Chart 3: Funnel Efficiency */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col"
                    >
                        <div className="mb-6">
                            <h3 className="font-bold text-navy text-lg">Funnel Efficiency</h3>
                            <p className="text-xs text-navy/50 mt-1">From visitor to booked call</p>
                        </div>
                        <div className="h-[250px] w-full mt-auto">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={funnelData} layout="vertical" margin={{ left: 0, right: 30 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 11, fill: '#64748b', fontWeight: 500 }} axisLine={false} tickLine={false} />
                                    <Tooltip
                                        cursor={{ fill: '#f8fafc' }}
                                        content={({ active, payload }) => {
                                            if (active && payload && payload.length) {
                                                return (
                                                    <div className="bg-navy text-white text-xs p-2 rounded-lg shadow-xl">
                                                        <p className="font-bold">{payload[0].value}</p>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        }}
                                    />
                                    <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                                        <Cell fill="#cbd5e1" /> {/* Visitors */}
                                        <Cell fill="#60a5fa" /> {/* Qualified */}
                                        <Cell fill="#2563eb" /> {/* Booked */}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
