import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Megaphone, Desktop, Robot } from "@phosphor-icons/react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AIToolsStack } from "@/components/home/AIToolsStack";

const services = [
  {
    icon: Megaphone,
    title: "Growth, Branding & Marketing",
    description: "These services help brands get attention, grow, and convert. We provide end-to-end strategies to elevate your market presence.",
    color: "bg-blue-100 text-primary",
    features: [
      "Branding & Brand Strategy",
      "Digital Marketing",
      "Social Media Management",
      "Flash Reels (Short-Form Content)",
      "Meme Marketing",
      "Performance Marketing",
      "SEO Optimization",
      "Influencer Marketing"
    ],
  },
  {
    icon: Desktop,
    title: "Web & Product Development",
    description: "We build scalable, production-ready digital products tailored to your needs.",
    color: "bg-indigo-100 text-indigo-600",
    features: [
      "Business Websites",
      "Web Applications"
    ],
  },
  {
    icon: Robot,
    title: "AI Solutions",
    description: "We help businesses save time and scale using AI with custom automations and intelligent agents.",
    color: "bg-sky-100 text-sky-600",
    features: [
      "AI Automations",
      "Custom AI Agents"
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <Layout currentPath="/services">
      {/* Hero */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              End-to-End Solutions for Your Digital Success
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer a comprehensive suite of services designed to help startups and
              enterprises build, grow, and innovate in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row gap-8 items-start p-8 rounded-[2rem] border border-border bg-card hover:border-primary/20 hover:shadow-xl transition-all duration-300 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className="flex-shrink-0">
                  <div className={`h-20 w-20 rounded-2xl flex items-center justify-center ${service.color}`}>
                    <service.icon size={40} />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-foreground group">
                        <CheckCircle className="text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                        <span className="text-base font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Tools Stack */}
      <AIToolsStack />

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can tailor our services to meet your specific needs.
            </p>
            <Button asChild variant="hero-outline" size="xl">
              <a href="/contact">
                Get in Touch
                <ArrowRight size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
