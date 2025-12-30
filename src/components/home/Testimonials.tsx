import { motion } from "framer-motion";
import { Quotes, Star, StarHalf, UserCircle } from "@phosphor-icons/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
    {
        name: "Vijay Kumar Reddy",
        text: "If you're searching for a reliable, highly skilled, and innovative development team, look no further than EliteX. Their expertise and commitment to excellence make them the ideal partner for building impactful apps.",
        rating: 4.5,
    },
    {
        name: "Giri Lanka",
        text: "Working with EliteX Solutions on our project was nothing short of exceptional. From concept to launch, their team combined technical brilliance with creativity, ensuring every detail aligned perfectly with our vision.",
        rating: 4.0,
    },
    {
        name: "Madhavika",
        text: "EliteX Solutions is a top development partner. Their meticulous attention to detail, timely delivery, and excellent communication make the entire development process smooth, efficient, and hassle-free.",
        rating: 4.5,
    },
    {
        name: "Priya Sharma",
        text: "The AI automation solutions provided by EliteX completely transformed our customer support workflow. We've seen a 40% reduction in response times and higher customer satisfaction scores.",
        rating: 3.5,
    },
    {
        name: "Rahul Verma",
        text: "I was impressed by the code quality and architectural decisions made by the EliteX engineering team. They don't just write code; they build scalable, robust systems that are built to last.",
        rating: 4.5,
    },
    {
        name: "Anjali Gupta",
        text: "Our brand visibility skyrocketed after EliteX revamped our digital marketing strategy. Their data-driven approach gave us clear insights and measurable ROI from day one.",
        rating: 4.0,
    },
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-secondary/30 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
                        Our Testimonials
                    </h2>
                    <p className="text-navy/60 text-lg">
                        Our satisfied clients share their success stories and experiences with us.
                    </p>
                </motion.div>

                <div className="px-4 md:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full">
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                            className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full min-h-[320px] border border-gray-100"
                                        >
                                            <div>
                                                <Quotes size={48} weight="fill" className="text-primary/20 mb-6" />
                                                <p className="text-navy/80 leading-relaxed mb-8 font-medium">
                                                    "{testimonial.text}"
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-secondary p-1 rounded-full text-primary">
                                                        <UserCircle size={40} weight="fill" className="text-navy/40" />
                                                    </div>
                                                    <span className="font-display font-bold text-navy text-sm md:text-base">
                                                        {testimonial.name}
                                                    </span>
                                                </div>
                                                <div className="flex gap-1">
                                                    {[...Array(5)].map((_, i) => {
                                                        if (i < Math.floor(testimonial.rating)) {
                                                            return <Star key={i} size={16} weight="fill" className="text-yellow-500" />;
                                                        } else if (i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0) {
                                                            return <StarHalf key={i} size={16} weight="fill" className="text-yellow-500" />;
                                                        } else {
                                                            return <Star key={i} size={16} className="text-gray-200" />;
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-2 text-navy hover:text-primary hover:border-primary transition-colors" />
                        <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-2 text-navy hover:text-primary hover:border-primary transition-colors" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};
