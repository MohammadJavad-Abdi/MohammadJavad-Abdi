import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <GitHubStats />
            <Contact />
        </>
    );
}
