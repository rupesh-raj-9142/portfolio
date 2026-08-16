import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import HeroStats from "@/components/portfolio/HeroStats";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import CaseStudy from "@/components/portfolio/CaseStudy";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Achievements from "@/components/portfolio/Achievements";
import GitHubCTA from "@/components/portfolio/GitHubCTA";
import ResumeCTA from "@/components/portfolio/ResumeCTA";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import { PERSONAL } from "@/data/portfolio-data";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: "Rupesh Raj | Full-Stack Developer & CSE (AI/ML) Student" },
      {
        name: "description",
        content:
          "Portfolio of Rupesh Raj, a 2nd-year CSE (AI/ML) student and aspiring Full-Stack Developer building practical web applications and exploring AI/ML.",
      },
      {
        property: "og:title",
        content: "Rupesh Raj | Full-Stack Developer & CSE (AI/ML) Student",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Rupesh Raj, a 2nd-year CSE (AI/ML) student and aspiring Full-Stack Developer building practical web applications and exploring AI/ML.",
      },
      { property: "og:image", content: PERSONAL.profileImage },
      { name: "twitter:image", content: PERSONAL.profileImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <HeroStats />
        <About />
        <Skills />
        <Projects />
        <CaseStudy />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <GitHubCTA />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
