import { motion } from "framer-motion";
import bipLogo from "@/assets/clients/BIP_LOGO.png";
import logo1 from "@/assets/clients/LOGO-1.jpeg";

const clients = [
    { name: "BIP", logo: bipLogo },
    { name: "Client 2", logo: logo1 },
];

export const TrustedBy = () => {
    return (
        <section className="py-6 bg-background border-b z-20 relative">
            <div className="container px-4 mx-auto">
                <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
                    Trusted by Industry Leaders
                </p>
                <div className="flex flex-wrap justify-center gap-12 items-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="w-32 h-20 flex items-center justify-center p-4"
                        >
                            <img
                                src={typeof client.logo === "string" ? client.logo : (client.logo as any).src}
                                alt={client.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
