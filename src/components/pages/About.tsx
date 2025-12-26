import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Users, Target, Lightbulb, Medal } from "@phosphor-icons/react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that directly impact your bottom line.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of technology trends to bring you cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work as an extension of your team, invested in your long-term success.",
  },
  {
    icon: Medal,
    title: "Excellence",
    description: "Quality is non-negotiable. We deliver work that exceeds expectations.",
  },
];

import maheshImg from "@/assets/FoundingTeam/mahesh.png";
import lokeshImg from "@/assets/FoundingTeam/lokesh.png";
import shivaImg from "@/assets/FoundingTeam/shiva.png";
import adityaImg from "@/assets/FoundingTeam/aditya.png";

const team = [
  { name: "G. Mahesh", role: "Co-Founder & Head of Strategy", image: maheshImg },
  { name: "G. Lokesh", role: "Head of Tech & AI", image: lokeshImg },
  { name: "Shiva", role: "Head of Marketing", image: shivaImg },
  { name: "Aditya", role: "Director of Photography", image: adityaImg },
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

const About = () => {
  return (
    <Layout currentPath="/about">
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              We're Building the Future of Digital Business
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              EliteX Solutions was founded with a mission to democratize access to
              cutting-edge technology for startups and growing businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
                From Startup to Industry Leader
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, EliteX Solutions emerged from a simple observation:
                  most startups and SMBs struggle to access the same quality of technology
                  and marketing solutions available to enterprise companies.
                </p>
                <p>
                  We set out to change that. Our team of experts brings together decades
                  of experience from top tech companies and agencies, now dedicated to
                  helping ambitious businesses achieve their full potential.
                </p>
                <p>
                  Today, we've helped over 150 companies transform their digital presence,
                  implement AI solutions, and build scalable platforms that drive real growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                <p className="text-4xl font-display font-bold">150+</p>
                <p className="text-primary-foreground/80 text-sm mt-1">Projects Completed</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-4xl font-display font-bold text-foreground">98%</p>
                <p className="text-muted-foreground text-sm mt-1">Client Retention</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-4xl font-display font-bold text-foreground">50+</p>
                <p className="text-muted-foreground text-sm mt-1">AI Deployments</p>
              </div>
              <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                <p className="text-4xl font-display font-bold">24/7</p>
                <p className="text-primary-foreground/80 text-sm mt-1">Support Available</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
              What Drives Us
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4">
              Meet Our Team
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="text-center p-6"
              >
                <div className="relative h-24 w-24 mx-auto mb-4">
                  <img
                    src={typeof member.image === 'string' ? member.image : (member.image as any).src}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full border-4 border-primary/10"
                  />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-background mb-6">
              Want to Work With Us?
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals and exciting projects. Let's connect.
            </p>
            <Button asChild variant="hero" size="xl">
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

export default About;
