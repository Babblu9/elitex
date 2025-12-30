import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aiLogo from "@/assets/clients/ai.png";
import mwLogo from "@/assets/clients/mw.png";
import bipLogo from "@/assets/clients/bip.png";
import logo1 from "@/assets/clients/logo1.png";
import client3 from "@/assets/clients/client3.png";

import { HeroRotatingCard } from "./RotatingRoleCard";

export const HeroSection = () => {
  const partners = [
    { logo: aiLogo, className: "h-8 md:h-12" },
    { logo: mwLogo, className: "h-10 md:h-16" },
    { logo: bipLogo, className: "h-8 md:h-12" },
    { logo: logo1, className: "h-8 md:h-12" },
    { logo: client3, className: "h-8 md:h-12" },
  ];

  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto space-y-8"
        >
          {/* Rotating Role Card - Replaces Static Badge */}
          <div className="mb-8">
            <HeroRotatingCard />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-navy leading-[1.1] mb-6">
            Your complete <span className="text-primary relative inline-block">
              technology
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> journey powered by one platform.
          </h1>

          {/* Subheading */}
          <p className="text-xl text-navy/60 max-w-3xl mx-auto leading-relaxed font-medium">
            Access personalized solutions, interactive AI agents, and comprehensive progress tracking – all in one unified platform.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8"
          >
            <Button size="xl" className="rounded-full px-12 bg-primary hover:bg-primary/90 text-white text-xl h-16 min-w-[200px] shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30">
              Start Scaling
            </Button>
            <Button size="xl" variant="outline" className="rounded-full px-12 border-2 border-navy/10 hover:bg-white text-navy text-xl h-16 min-w-[200px] gap-2 transition-all hover:scale-105 hover:border-navy/20 bg-transparent">
              View Solutions <ArrowRight size={22} />
            </Button>
          </motion.div>

          {/* Social Proof - Partners */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-16"
          >
            <p className="text-sm text-navy/40 font-bold tracking-widest uppercase mb-8">
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
              {partners.map((partner, index) => (
                <img
                  key={index}
                  src={typeof partner.logo === "string" ? partner.logo : (partner.logo as any).src}
                  alt={`Partner ${index + 1}`}
                  className={`${partner.className} w-auto object-contain brightness-0 hover:brightness-100 transition-all duration-300`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
