import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-white md:bg-transparent">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[2.5rem] bg-primary overflow-hidden px-6 py-12 text-center md:px-20 lg:py-20 shadow-2xl shadow-primary/30">

          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[50%] -left-[20%] w-[100%] h-[200%] bg-white/10 rotate-12 blur-3xl opacity-30 transform-gpu" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/30 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              Ready to create your own <br /> success story?
            </h2>

            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
              Join hundreds of creators and businesses scaling with our platform today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="xl" variant="secondary" className="rounded-full h-16 px-10 text-primary bg-white hover:bg-gray-50 text-xl font-bold shadow-xl transition-transform hover:scale-105">
                <a href="/contact">Get Started for FREE</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
