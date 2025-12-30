import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Megaphone, Desktop, Robot } from "@phosphor-icons/react";
import { motion } from "framer-motion";

import growthImg from "@/assets/growth.png";
import webImg from "@/assets/web.webp";
import aiImg from "@/assets/AI.jpeg";

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
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-6">
            Everything you need to <span className="text-primary">grow</span>
          </h2>
          <p className="text-xl text-navy/60">
            From strategic branding to advanced AI integrations, we provide the tools to elevate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-gray-100/50"
            >
              {/* Image Area */}
              <div className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 bg-gray-50 border border-gray-100 group-hover:shadow-inner transition-all`}>
                <img
                  src={typeof category.image === 'string' ? category.image : (category.image as any).src}
                  alt={category.title}
                  className={`w-full h-full object-${(category as any).imageFit || 'cover'} transform group-hover:scale-110 transition-transform duration-700 ease-out`}
                />

                {/* Floating Icon Badge */}
                <div className={`absolute top-4 left-4 p-3 rounded-2xl bg-white shadow-lg ${category.color}`}>
                  <category.icon size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-navy/60 mb-8 leading-relaxed">
                  {category.description}
                </p>

                {/* Tags/Pills for Items */}
                <div className="flex flex-wrap gap-2 mb-8 flex-1 content-start">
                  {category.items.slice(0, 4).map((item, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-secondary text-navy/70 text-xs font-medium border border-secondary">
                      {item}
                    </span>
                  ))}
                  {category.items.length > 4 && (
                    <span className="px-3 py-1 rounded-full bg-gray-50 text-gray-400 text-xs font-medium">
                      +{category.items.length - 4} more
                    </span>
                  )}
                </div>

                <Button className="w-full rounded-2xl bg-primary text-white hover:bg-primary/90 hover:text-white transition-all h-12 text-md font-medium group-hover:shadow-lg group-hover:shadow-primary/20">
                  Explore {category.title.split(' ')[0].replace(',', '')} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
