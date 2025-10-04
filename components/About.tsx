"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles } from "lucide-react";

const About = () => {
    const features = [
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "Clean Code",
            description: "Writing maintainable, scalable code following best practices",
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Smooth UX",
            description: "Creating intuitive interfaces with delightful user experiences",
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Performance",
            description: "Optimizing for speed and efficiency in every project",
        },
    ];

    return (
        <section id="about" className="py-20 bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Frontend Developer with hands-on experience building responsive,
                        user-friendly web apps. Passionate about creating smooth user
                        experiences and performance optimization.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 card-hover"
                        >
                            <div className="text-purple-500 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
