"use client";

import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiRedux,
    SiMui,
    SiHtml5,
    SiCss3,
    SiGit,
    SiDocker,
} from "react-icons/si";

const TechStack = () => {
    const technologies = [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "Material UI", icon: <SiMui />, color: "#0081CB" },
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    ];

    return (
        <section id="tech-stack" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Technologies I work with to build amazing web applications
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col items-center justify-center gap-3 cursor-pointer card-hover"
                        >
                            <div className="text-5xl" style={{ color: tech.color }}>
                                {tech.icon}
                            </div>
                            <span className="text-sm font-semibold text-gray-300">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
