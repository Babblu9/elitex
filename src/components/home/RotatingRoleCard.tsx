import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingCardProps {
    prefix: string;
    words: string[];
    color?: "primary" | "navy" | "accent";
    className?: string;
    size?: "sm" | "md" | "lg";
}

export const RotatingCard = ({
    prefix,
    words,
    color = "primary",
    className = "",
    size = "md"
}: RotatingCardProps) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div
            className={`relative flex flex-col items-center justify-center ${className}`}
            style={{ minHeight: "200px" }}
        >
            {/* Prefix Label */}
            <span className={`text-sm font-medium mb-4 uppercase tracking-wider opacity-80 ${color === 'navy' ? 'text-navy/70' : 'text-primary'}`}>
                {prefix}
            </span>

            {/* The Card Stack */}
            <div className="relative w-full max-w-sm h-20 flex items-center justify-center perspective-1000">
                <AnimatePresence initial={false} mode="popLayout">
                    {[...Array(2)].map((_, i) => {
                        const activeIndex = (index + i) % words.length;
                        const isFront = i === 0;

                        return (
                            <motion.div
                                layout // added layout prop for smoother position handling
                                key={`${activeIndex}-${i}`}
                                initial={isFront ? { scale: 0.9, y: -20, opacity: 0, zIndex: 0 } : { scale: 0.85, y: -35, opacity: 0, zIndex: -1 }}
                                animate={{
                                    scale: isFront ? 1 : 0.9,
                                    y: isFront ? 0 : -20,
                                    opacity: isFront ? 1 : 0.4,
                                    zIndex: isFront ? 20 : 10,
                                }}
                                exit={{
                                    y: 50,
                                    opacity: 0,
                                    scale: 1.05,
                                    zIndex: 30,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut" // Smoother, less springy easing to reduce jitter
                                }}
                                style={{ willChange: "transform, opacity, top" }} // Hardware acceleration hint
                                className={`absolute w-full h-20 rounded-2xl border-2 shadow-lg flex items-center justify-center overflow-hidden
                                ${color === 'primary' ? 'border-primary bg-white text-primary-foreground' : 'border-navy bg-white text-navy'}`}
                            // Removed backdrop-blur-md and reduced shadow-xl to shadow-lg for performance
                            >
                                <span className={`text-xl md:text-2xl font-bold whitespace-nowrap px-6 ${color === 'primary' ? 'text-navy' : 'text-navy'}`}>
                                    {words[activeIndex]}
                                </span>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {/* Static Background filler */}
                <div
                    className={`absolute top-0 w-[90%] h-20 rounded-2xl border transition-colors opacity-10 -translate-y-8 scale-90 z-0
                ${color === 'primary' ? 'border-primary bg-primary/20' : 'border-current'}`}
                />
            </div>
        </div>
    );
};

// --- Variations ---

// 1. Hero Variation (Default)
export const HeroRotatingCard = () => (
    <RotatingCard
        prefix="Built for every"
        words={["Business Owner", "Startup Founder", "Marketing Director", "E-commerce Brand", "Content Creator"]}
        color="primary"
    />
);

// 2. Feature/Needs Variation
export const FeatureRotatingCard = () => (
    <RotatingCard
        prefix="Automate your"
        words={["Lead Gen", "Customer Support", "Content Writing", "Data Entry", "Social Media"]}
        color="navy"
        className="text-navy"
    />
);

// 3. Course/Services Variation
export const ServiceRotatingCard = () => (
    <RotatingCard
        prefix="Master the art of"
        words={["AI Agents", "Web Development", "Brand Strategy", "Digital Growth", "UI/UX Design"]}
        color="accent"
        className="text-indigo-600"
    />
);
