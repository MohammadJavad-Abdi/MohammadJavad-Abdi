"use client";

import { motion } from "framer-motion";

const GitHubStats = () => {
    const username = "MohammadJavad-Abdi";

    return (
        <section id="github-stats" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        GitHub <span className="gradient-text">Statistics</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        My coding activity and contributions
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 flex items-center justify-center"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1a1a1a`}
                            alt="GitHub Stats"
                            className="rounded-lg w-full h-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-xl border border-gray-700 flex items-center justify-center"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=1a1a1a`}
                            alt="Top Languages"
                            className="rounded-lg w-full h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
