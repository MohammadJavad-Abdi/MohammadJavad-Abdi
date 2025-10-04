"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Golrang System",
            location: "Iran",
            description:
                "Built interactive dashboards with ReactFlow & ECharts to visualize complex business processes and KPIs. Collaborated closely with backend teams for data-driven insights.",
            tech: ["Next.js", "React", "TypeScript", "ReactFlow", "ECharts", "SCSS"],
            color: "from-blue-600 to-cyan-600",
        },
        {
            title: "Finestel",
            location: "Turkey",
            description:
                "Developed user, admin, and super admin dashboards using Next.js, including reporting and customizable account management. Optimized trading & analytical charts with real-time rendering.",
            tech: ["Next.js", "React", "MUI", "Tailwind CSS", "Chart.js"],
            color: "from-purple-600 to-pink-600",
        },
        {
            title: "tjnoufal.com",
            location: "Germany",
            description:
                "Fully built and deployed frontend focusing on performance and fast UX using Next.js and Shadcn UI.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn"],
            color: "from-orange-600 to-red-600",
            link: "https://lnkd.in/d56VEhrm",
        },
    ];

    return (
        <section id="projects" className="py-20 bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Highlights from my professional experience
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 overflow-hidden card-hover"
                        >
                            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <MapPin size={14} className="mr-1" />
                                            {project.location}
                                        </div>
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-400 hover:text-purple-300 transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                                <p className="text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-700/50 rounded-full text-xs font-medium text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
