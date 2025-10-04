import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Mohammad Javad Abdi. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/Mohammadjavad436"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mohammad-javad-abdi-156079223/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-gray-500 text-sm italic">
                        "Clean code, smooth UX, and high performance are my superpowers."
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
