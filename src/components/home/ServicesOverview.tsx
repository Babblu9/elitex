import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Megaphone, Desktop, Robot } from "@phosphor-icons/react";
import { motion } from "framer-motion";

import growthImg from "@/assets/growth.png";
import webImg from "@/assets/web.webp";
import aiImg from "@/assets/ai.webp";

const serviceCategories = [
  {
    title: "Growth, Branding & Marketing",
    description: "These services help brands get attention, grow, and convert.",
    icon: Megaphone,
    color: "bg-blue-100 text-primary",
    image: growthImg,
    imageFit: "contain",
    aspectClass: "aspect-auto",
    imageHeight: "h-auto",
    items: [
      "Branding & Brand Strategy",
      "Digital Marketing",
      "Social Media Management",
      "Flash Reels (Short-Form Content)",
      "Meme Marketing",
      "Performance Marketing",
      "SEO Optimization",
      "Influencer Marketing"
    ]
  },
  {
    title: "Web & Product Development",
    description: "We build scalable, production-ready digital products.",
    icon: Desktop,
    color: "bg-indigo-100 text-indigo-600",
    image: webImg,
    aspectClass: "aspect-auto",
    imageHeight: "h-auto",
    items: [
      "Business Websites",
      "Web Applications"
    ]
  },
  {
    title: "AI Solutions",
    description: "We help businesses save time and scale using AI.",
    icon: Robot,
    color: "bg-sky-100 text-sky-600",
    image: aiImg,
    aspectClass: "aspect-auto",
    imageHeight: "h-auto",
    items: [
      "AI Automations",
      "Custom AI Agents"
    ]
  }
];

export const ServicesOverview = () => {
  return (
    <div className="flex flex-col">
      {serviceCategories.map((category, index) => (
        <section
          key={index}
          className={`py-12 md:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="container mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 space-y-8 text-center lg:text-left"
              >
                <div className={`inline-flex p-4 rounded-2xl ${category.color} mb-2 shadow-sm`}>
                  <category.icon size={32} />
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-[1.2]">
                  {category.title}
                </h2>

                <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                  {category.description}
                </p>

                {/* Sub-items List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex justify-center lg:justify-start">
                  <Button size="lg" className="rounded-xl h-14 px-8 bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm text-base font-medium transition-all">
                    Learn More <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </motion.div>

              {/* Image Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-900/10 ${(category as any).aspectClass || 'aspect-[4/3]'} group bg-white border border-slate-100`}>
                  <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/5 transition-colors duration-500 z-10" />
                  <img
                    src={typeof category.image === 'string' ? category.image : (category.image as any).src}
                    alt={category.title}
                    className={`w-full ${(category as any).imageHeight || 'h-full'} object-${(category as any).imageFit || 'cover'} transform group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
