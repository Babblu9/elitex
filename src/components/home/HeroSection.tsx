import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aiLogo from "@/assets/clients/ai.png";
import bsLogo from "@/assets/clients/bs.png";
import mwLogo from "@/assets/clients/mw.png";
import partyLogo from "@/assets/clients/party.png";
import sveyeLogo from "@/assets/clients/sveye.png";

export const HeroSection = () => {
  const partners = [
    { logo: aiLogo, className: "h-8 md:h-12" },
    { logo: bsLogo, className: "h-8 md:h-12" },
    { logo: mwLogo, className: "h-10 md:h-16" },
    { logo: partyLogo, className: "h-10 md:h-16" },
    { logo: sveyeLogo, className: "h-8 md:h-12" },
  ];

  return (
    <section className="relative pt-16 pb-16 overflow-hidden bg-white">
      {/* Subtle Background Pattern - Optional/Minimal */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-4 border border-blue-100/50 hover:bg-blue-100/50 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New features for your digital transformation
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-gray-900 leading-[1.1]">
            Your complete <span className="text-primary">technology</span> journey. <br />
            Powered by one platform.
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Access personalized solutions, interactive AI agents, and comprehensive progress tracking – all in one unified platform designed to elevate your business.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="xl" className="rounded-xl px-10 bg-primary hover:bg-primary/90 text-white text-lg h-14 min-w-[180px] shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5">
              Start Scaling
            </Button>
            <Button size="xl" variant="outline" className="rounded-xl px-10 border-2 border-gray-100 hover:bg-gray-50 text-gray-700 text-lg h-14 min-w-[180px] gap-2 transition-all">
              View Solutions <ArrowRight size={20} />
            </Button>
          </div>

          {/* Social Proof - Partners */}
          <div className="pt-8 pb-4">
            <p className="text-sm text-gray-400 font-medium mb-6">
              Collaboration Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
              {partners.map((partner, index) => (
                <img
                  key={index}
                  src={typeof partner.logo === "string" ? partner.logo : (partner.logo as any).src}
                  alt={`Partner ${index + 1}`}
                  className={`${partner.className} w-auto object-contain`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
