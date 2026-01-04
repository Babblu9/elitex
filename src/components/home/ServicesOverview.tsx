
import { Button } from "@/components/ui/button";
import { ArrowRight, Film, Palette, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

import growthImg from "@/assets/growth.jpg";
import webImg from "@/assets/web.jpg";
import aiImg from "@/assets/AI.jpg";
import cinemaImg from "@/assets/cinematography.jpg";

const highlights = [
  {
    icon: Film,
    title: "Cinematography & Video Editing",
    description: "High-converting videos that sell your brand story.",
    items: ["Brand films", "Ads & reels", "Product videos", "Professional post-production"],
    color: "bg-orange-50 text-orange-600",
    image: cinemaImg,
  },
  {
    icon: Palette,
    title: "Brand Identity & Visual Design",
    description: "Make your brand instantly recognizable and trustworthy.",
    items: ["Brand identity", "Posters & creatives", "Campaign visuals", "Social content systems"],
    color: "bg-purple-50 text-purple-600",
    image: webImg,
  },
  {
    icon: BrainCircuit,
    title: "AI & Growth Systems",
    description: "Automation and intelligence that scale what you build.",
    items: ["AI agents", "WhatsApp automation", "Lead qualification", "Analytics & automation"],
    color: "bg-blue-50 text-blue-600",
    image: aiImg,
  }
];

export const ServicesOverview = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Layer 1 Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-navy mb-6 tracking-tight">
              What EliteX Is <span className="text-primary">Best At</span>
            </h2>
            <p className="text-xl text-navy/60 max-w-2xl mx-auto font-medium">
              Creative, brand-first growth powered by technology and AI.
            </p>
          </motion.div>
        </div>

        {/* 3 Bold Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full"
            >
              {/* Image / Visual Area */}
              <div className="relative mb-8 rounded-[2rem] overflow-hidden aspect-[4/3] shadow-sm border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
                <img
                  src={typeof item.image === 'string' ? item.image : (item.image as any).src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Icon (Lucide) */}
                <div className={`absolute top-6 left-6 p-4 rounded-2xl bg-white shadow-lg ${item.color} z-20`}>
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <h3 className="text-3xl font-display font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg text-navy/60 mb-6 leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Minimal List */}
                <ul className="space-y-3 mb-8 border-l-2 border-gray-100 pl-5">
                  {item.items.map((subItem, i) => (
                    <li key={i} className="text-navy/80 text-base font-semibold">
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
