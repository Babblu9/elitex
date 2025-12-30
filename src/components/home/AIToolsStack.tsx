import { motion } from "framer-motion";

// Flat list of tools with category tags and descriptions
const tools = [
    {
        name: "Make",
        logo: "https://cdn.simpleicons.org/make",
        category: "NO-CODE AUTOMATION",
        description: "No-code workflow builder"
    },
    {
        name: "Claude",
        logo: "https://cdn.simpleicons.org/anthropic",
        category: "LLM ASSISTANT",
        description: "AI writing & reasoning"
    },
    {
        name: "Luma AI",
        logo: "/images/luma-ai-logo.png",
        category: "TEXT-TO-VIDEO",
        description: "Text to video generation"
    },
    {
        name: "Runway ML",
        logo: "/images/runway-logo.png",
        category: "VIDEO GENERATION",
        description: "AI video editor"
    },
    {
        name: "DaVinci",
        logo: "https://cdn.simpleicons.org/blackmagicdesign",
        category: "VIDEO EDITING",
        description: "Pro video editor"
    },
    {
        name: "Topaz Labs",
        logo: "/images/topaz-labs-logo.png",
        category: "ENHANCEMENT",
        description: "Video/photo enhancer"
    },
    {
        name: "Merlin",
        logo: "/images/merlin-logo.png",
        category: "BROWSER ASSISTANT",
        description: "AI browser copilot"
    },
    {
        name: "Perplexity",
        logo: "https://cdn.simpleicons.org/perplexity",
        category: "AI SEARCH",
        description: "AI search engine"
    },
    {
        name: "Midjourney",
        logo: "/images/midjourney-logo.png",
        category: "IMAGE GENERATION",
        description: "Text to images"
    },
    {
        name: "ChatGPT",
        logo: "/images/chatgpt-logo.png",
        category: "LLM ASSISTANT",
        description: "Conversational AI"
    },
    {
        name: "Rollout",
        logo: "/images/rollout-logo.png",
        category: "WEBSITE BUILDER",
        description: "AI site builder"
    },
    {
        name: "Socialsonic",
        logo: "/images/socialsonic-logo.png",
        category: "SOCIAL MEDIA AI",
        description: "AI social posts"
    },
    {
        name: "Writesonic",
        logo: "/images/writesonic-logo.png",
        category: "WRITING & MARKETING",
        description: "AI content tool"
    },
    {
        name: "Simplified",
        logo: "/images/simplified-logo.png",
        category: "DESIGN & MARKETING",
        description: "AI design & video"
    },
    {
        name: "Adobe Firefly",
        logo: "/images/adobe-firefly-logo.png",
        category: "GENERATIVE AI",
        description: "Creative generative AI"
    },
    {
        name: "Photoshop AI",
        logo: "/images/photoshop-logo.png",
        category: "IMAGE EDITING",
        description: "AI image editing"
    },
    {
        name: "Illustrator",
        logo: "/images/illustrator-logo.png",
        category: "VECTOR DESIGN",
        description: "AI vector graphics"
    },
    {
        name: "Figma",
        logo: "/images/figma-logo.png",
        category: "UI DESIGN",
        description: "Collaborative design"
    },
    {
        name: "Canva",
        logo: "/images/canva-logo.png",
        category: "GRAPHIC DESIGN",
        description: "Simple design tool"
    },
    {
        name: "Premiere Pro",
        logo: "/images/premiere-pro-logo.png",
        category: "VIDEO EDITING",
        description: "Pro video editing tool"
    },
    {
        name: "After Effects",
        logo: "/images/after-effects-logo.png",
        category: "MOTION GRAPHICS",
        description: "VFX & motion graphics"
    },
    {
        name: "n8n",
        logo: "https://cdn.simpleicons.org/n8n",
        category: "WORKFLOW AUTOMATION",
        description: "Workflow automation"
    },
    {
        name: "Zapier",
        logo: "https://cdn.simpleicons.org/zapier",
        category: "AUTOMATION",
        description: "Easy automation"
    },
    {
        name: "LangChain",
        logo: "https://cdn.simpleicons.org/langchain",
        category: "LLM FRAMEWORK",
        description: "Building with LLMs"
    },
    {
        name: "Webflow",
        logo: "https://cdn.simpleicons.org/webflow",
        category: "WEB DEVELOPMENT",
        description: "Visual web dev"
    },
    {
        name: "Framer",
        logo: "https://cdn.simpleicons.org/framer",
        category: "WEB DESIGN",
        description: "Design to site"
    }
];

export const AIToolsStack = () => {
    return (
        <section className="py-24 bg-gray-50 relative border-t border-gray-200">

            {/* Section Header */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                    Hands-on with real tools
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-6">
                    Master the AI Stack Professionals Actually Use
                </h2>
                <p className="text-xl text-navy/60 max-w-2xl mx-auto">
                    We leverage the most advanced AI tools and frameworks to deliver scalable, production-grade solutions for our clients.
                </p>
            </div>

            {/* Tools Grid */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tools.map((tool, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                        >
                            {/* Logo Area */}
                            <div className="h-24 w-full bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-white group-hover:border-primary/20 transition-all">
                                {tool.logo ? (
                                    <img
                                        src={tool.logo}
                                        alt={`${tool.name} logo`}
                                        className="h-12 w-auto object-contain max-w-[80%] hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <span className="text-2xl font-bold text-gray-400 group-hover:text-primary transition-colors">
                                        {tool.name.substring(0, 2).toUpperCase()}
                                    </span>
                                )}
                            </div>

                            {/* Content Area */}
                            <div className="flex flex-col flex-grow">
                                <div className="mb-2">
                                    <span className="inline-block px-2 py-1 rounded-md bg-gray-100 text-[10px] font-bold tracking-wider text-gray-500 uppercase border border-gray-200">
                                        {tool.category}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-primary transition-colors">
                                    {tool.name}
                                </h3>
                                <p className="text-sm text-navy/60 font-medium">
                                    {tool.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
