import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mohammad Javad Abdi - Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and TypeScript. Building responsive, user-friendly web applications with clean code and smooth UX.",
    keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Development", "Mohammad Javad Abdi"],
    authors: [{ name: "Mohammad Javad Abdi" }],
    openGraph: {
        title: "Mohammad Javad Abdi - Frontend Developer",
        description: "Frontend Developer specializing in React, Next.js, and TypeScript",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} antialiased`}>
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
