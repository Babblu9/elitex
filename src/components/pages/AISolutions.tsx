import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Robot,
  Chat,
  GitMerge,
  Brain,
  Lightning,
  ChartLine,
  Shield,
  Clock
} from "@phosphor-icons/react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const aiServices = [
  {
    icon: GitMerge,
    title: "AI Automations",
    description: "Workflow automation using AI to reduce manual work. Streamline your operations with intelligent systems that learn and improve over time.",
  },
  {
    icon: Robot,
    title: "Custom AI Agents",
    description: "AI agents for sales, support, operations, and analytics. Deploy intelligent assistants that work around the clock to enhance your business capabilities.",
  },
];

const benefits = [
  { icon: Clock, title: "24/7 Operations", description: "AI agent work round the clock without breaks" },
  { icon: Lightning, title: "Instant Response", description: "Respond to queries in milliseconds" },
  { icon: Shield, title: "Consistent Quality", description: "Deliver reliable, error-free results" },
  { icon: ChartLine, title: "Scalable Solutions", description: "Handle growth without proportional cost increase" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AISolutions = () => {
  return (
    <Layout currentPath="/ai-solutions">
      {/* Hero */}
      <section className="py-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-electric rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6">
              <Brain size={16} />
              Artificial Intelligence
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-background mt-4 mb-6">
              Harness the Power of AI for Your Business
            </h1>
            <p className="text-background/70 text-lg leading-relaxed mb-8">
              Transform your operations with intelligent automation, custom AI agents,
              and cutting-edge machine learning solutions tailored to your needs.
            </p>
            <Button asChild variant="hero" size="xl">
              <a href="/contact">
                Explore AI Solutions
                <ArrowRight size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              AI Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              AI Solutions That Drive Results
            </h2>
            <p className="text-muted-foreground text-lg">
              From chatbots to predictive analytics, we build AI systems that
              automate, optimize, and transform your business processes.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {aiServices.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Why AI?
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              The AI Advantage
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="text-center p-6"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              Ready to Embrace AI?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can transform your business operations and give you a competitive edge.
            </p>
            <Button asChild variant="hero-outline" size="xl">
              <a href="/contact">
                Start the Conversation
                <ArrowRight size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AISolutions;
