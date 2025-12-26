import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const PrivacyPolicy = () => {
    return (
        <Layout currentPath="/privacy-policy">
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-4 mb-6">
                            Privacy Policy
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
                            At EliteX Solutions, we value your privacy and are committed to protecting your personal data.
                            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                        </p>

                        <h3>1. Information We Collect</h3>
                        <p>
                            We may collect personal information such as your name, email address, phone number, and company details when you:
                            <ul>
                                <li>Fill out a contact form</li>
                                <li>Subscribe to our newsletter</li>
                                <li>Request a consultation</li>
                            </ul>
                        </p>

                        <h3>2. How We Use Your Information</h3>
                        <p>
                            We use the collected information to:
                            <ul>
                                <li>Provide and improve our services</li>
                                <li>Communicate with you regarding your inquiries</li>
                                <li>Send relevant updates and marketing materials (you can opt-out at any time)</li>
                            </ul>
                        </p>

                        <h3>3. Data Security</h3>
                        <p>
                            We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse.
                        </p>

                        <h3>4. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at privacy@elitex.com.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PrivacyPolicy;
