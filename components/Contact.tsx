"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "adbimohamd110@gmail.com",
            link: "mailto:adbimohamd110@gmail.com",
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            title: "LinkedIn",
            value: "Connect with me",
            link: "https://www.linkedin.com/in/mohammad-javad-abdi-156079223/",
        },
        {
            icon: <Github className="w-6 h-6" />,
            title: "GitHub",
            value: "@Mohammadjavad436",
            link: "https://github.com/Mohammadjavad436",
        },
    ];

    return (
        <section id="contact" className="py-20 bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Let's build something amazing together! Feel free to reach out for
                        collaborations or just a friendly chat.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={index}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700 text-center card-hover"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mb-4">
                                <div className="text-purple-400">{info.icon}</div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                            <p className="text-gray-400">{info.value}</p>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a
                        href="https://lnkd.in/d56VEhrm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                        View My Portfolio
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
