import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 bg-white md:bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[2.5rem] bg-blue-600 overflow-hidden px-6 py-12 text-center md:px-20 lg:py-16 shadow-2xl shadow-blue-900/20">

          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-50" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-50" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              Ready to transform your business?
            </h2>

            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Join the future of innovation. Let's build something extraordinary together using the power of AI and modern technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="xl" variant="secondary" className="rounded-xl h-14 px-8 text-blue-900 bg-white hover:bg-blue-50 text-lg font-semibold shadow-lg">
                <a href="/contact">Get Started Now</a>
              </Button>
              <Button size="xl" variant="outline" className="rounded-xl h-14 px-8 border-2 border-blue-400 text-white hover:bg-blue-700 hover:border-blue-400 text-lg font-semibold bg-transparent">
                <a href="/services">Explore Services <ArrowRight size={20} className="ml-2 inline-block" /></a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
