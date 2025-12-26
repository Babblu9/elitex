import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const TermsConditions = () => {
    return (
        <Layout currentPath="/terms-conditions">
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
                            Terms & Conditions
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-lg dark:prose-invert">
                        <p>
                            Welcome to EliteX Solutions. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
                        </p>

                        <h3>1. Acceptance of Terms</h3>
                        <p>
                            By accessing specific parts of this website or using our services, you are agreeing to these Terms & Conditions. If you do not agree, please do not use our services.
                        </p>

                        <h3>2. Intellectual Property</h3>
                        <p>
                            All content, trademarks, and data on this website, including software, databases, text, graphics, icons, and hyperlinks, are the property of or licensed to EliteX Solutions and are protected by law.
                        </p>

                        <h3>3. Limitation of Liability</h3>
                        <p>
                            EliteX Solutions shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.
                        </p>

                        <h3>4. Governing Law</h3>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which EliteX Solutions operates.
                        </p>

                        <h3>5. Changes to Terms</h3>
                        <p>
                            We reserve the right to modify these terms at any time. Your continued use of the site constitutes acceptance of such changes.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TermsConditions;
