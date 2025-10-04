"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hi, I&apos;m{" "}
                        <span className="gradient-text">Mohammad Javad Abdi</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        Frontend Developer specializing in building exceptional digital
                        experiences with <span className="text-blue-400">React</span>,{" "}
                        <span className="text-blue-400">Next.js</span>, and{" "}
                        <span className="text-blue-400">TypeScript</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="/Mohammadjavad_Abdi_Resume.pdf"
                            download="Mohammadjavad_Abdi_Resume.pdf"
                            className="px-8 py-3 border-2 border-purple-600 rounded-lg font-semibold hover:bg-purple-600/10 transition-all duration-300 flex items-center gap-2"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-gray-600 rounded-lg font-semibold hover:bg-gray-600/10 transition-all duration-300"
                        >
                            Get In Touch
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <a href="#about">
                        <ArrowDown className="animate-bounce text-gray-400" size={32} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
