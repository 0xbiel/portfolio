"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Header from "@/components/ui/Header";
import About from "@/components/ui/About";
import Footer from "@/components/ui/Footer";
import WorkItem from "@/components/ui/WorkItem";
import ProjectItem from "@/components/ui/ProjectItem";
import ProjectFilter from "@/components/ui/ProjectFilter";
import Skills from "@/components/ui/Skills";
import Languages from "@/components/ui/Languages";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Define projects data for better management
  const projects = [
    {
      title: "UPV Bot",
      role: "Python CLI Tool",
      description:
        "A small cli, that helps automating reservations for the UPV gym and other facilities.",
      link: "https://github.com/0xbiel/upv-bot",
      emoji: "🤖",
      technologies: ["Python", "CLI", "Automation"],
      screenshot: "/images/upv-bot-screenshot.png",
      category: "Tools",
    },
    {
      title: "Goat Sim",
      role: "Next.js Web App",
      description:
        "A website to simulate the growth of assets inside the Goat Vaults with monthly deposits.",
      link: "https://gpsim.vercel.app",
      emoji:
        "https://github.com/goatfi/assets/blob/main/icon/256x256%20Main%20Logo%20-%20Rounded.png?raw=true",
      technologies: ["Next.js", "React", "DeFi", "Web3"],
      screenshot: "/images/goat-sim-screenshot.png",
      category: "Tools",
    },
    {
      title: "Goat Dune",
      role: "Dune Dashboard",
      description:
        "A dashboard for Goat's DAO stats, such as tvl, revenue and more. Used by the Goat core team.",
      link: "https://dune.com/0xbiel/goat",
      emoji: "🐐",
      technologies: ["SQL", "Python", "JavaScript", "DeFi"],
      screenshot: "/images/goat-dune.png",
      category: "Analytics",
    },
    {
      title: "Convex Fix",
      role: "Solidity Contracts",
      description:
        "Test on fixing a Convex vulnerability where a non existing rewards token can lock LP tokens.",
      link: "https://github.com/0xbiel/ConvexFix",
      emoji: "💻",
      technologies: ["Solidity", "Smart Contracts", "Security"],
      category: "Security",
    },
  ];

  // Extract unique categories from projects
  const categories = [...new Set(projects.map((project) => project.category))];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto min-h-screen px-6 py-12">
        {/* Main Content */}
        <main className="space-y-20">
          {/* About */}
          <About />

          {/* Skills */}
          <Skills />

          {/* Education */}
          <section id="education" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="p-0.75 w-50 bg-[var(--main-color)]" />
            <div className="space-y-8">
              <WorkItem
                position="Universitat Politècnica de València"
                company="Double degree in Computer Engineering & Business Administration"
                period="2024 - Present"
                description="Building a strong foundation in software engineering and business strategy."
                emoji="https://www.upv.es/favicon.ico"
              />
            </div>
          </section>

          {/* Languages */}
          <Languages />

          {/* Projects */}
          <section id="projects" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold">Projects</h2>
            <div className="p-0.75 w-50 bg-[var(--main-color)]" />
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <ProjectItem
                  key={index}
                  title={project.title}
                  role={project.role}
                  description={project.description}
                  link={project.link}
                  emoji={project.emoji}
                  technologies={project.technologies}
                  screenshot={project.screenshot}
                />
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="https://github.com/0xbiel"
                className="text-sm underline"
                target="_blank"
              >
                Most of my work lives in private repositories, but here are a
                few public ones →
              </Link>
            </div>
          </section>

          {/* Links/Contact */}
          <section id="contact" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold">Get In Contact</h2>
            <div className="p-0.75 w-50 bg-[var(--main-color)]" />
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg leading-relaxed">
                  Have a question, collaboration idea, or just want to say hi? I&apos;d love to hear from you! :)
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm opacity-80">Drop me an email directly:</p>
                <a
                  href="mailto:hello@biel.codes"
                >
                  hello@biel.codes
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-sm opacity-80">You can also find me on:</p>
                <div className="flex space-x-6 pt-2">
                  <a
                    href="https://github.com/0xbiel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-[var(--main-color)] transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href="https://x.com/0xbiel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-[var(--main-color)] transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://dune.com/0xbiel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-[var(--main-color)] transition-colors"
                    aria-label="Dune"
                  >
                    <svg fill="currentColor" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path fillRule="evenodd" clipRule="evenodd" d="M24.1905 5.32838C22.0195 3.76901 19.4348 2.88834 16.7632 2.79776C14.0917 2.70719 11.4532 3.41079 9.1816 4.81956C6.90998 6.22832 5.1072 8.27897 4.0012 10.7121C2.8952 13.1453 2.53563 15.8518 2.96795 18.4892C3.40028 21.1267 4.60508 23.5768 6.43005 25.5297C8.25502 27.4826 10.6182 28.8506 13.2208 29.4605C15.8233 30.0705 18.5484 29.8952 21.0512 28.9566C23.5541 28.018 25.7224 26.3584 27.2819 24.1878C28.3174 22.7465 29.0588 21.1154 29.4639 19.3876C29.8689 17.6598 29.9296 15.8692 29.6426 14.118C29.3555 12.3667 28.7263 10.6891 27.7908 9.18102C26.8554 7.67291 25.632 6.36378 24.1905 5.32838ZM16.8578 0.00936612C20.0808 0.118633 23.199 1.18108 25.8182 3.06236C27.5572 4.31149 29.0332 5.89089 30.1618 7.71038C31.2904 9.52987 32.0495 11.5538 32.3958 13.6667C32.7421 15.7795 32.6689 17.9399 32.1802 20.0244C31.6915 22.1089 30.797 24.0768 29.5478 25.8156C27.6663 28.4345 25.0504 30.4367 22.0309 31.569C19.0114 32.7013 15.7239 32.9128 12.5841 32.1769C9.44433 31.441 6.59332 29.7907 4.39159 27.4346C2.18985 25.0786 0.736285 22.1226 0.214695 18.9405C-0.306895 15.7585 0.12692 12.4932 1.46128 9.55762C2.79564 6.62206 4.97062 4.14807 7.71117 2.4485C10.4517 0.748922 13.6348 -0.0999007 16.8578 0.00936612Z" fill="currentColor"></path>
                      <path d="M12.3849 31.652L12.3655 31.6466L12.3461 31.6429L12.3461 31.6429L12.3459 31.6429L12.3456 31.6428L12.3445 31.6426L12.3353 31.6407C12.3265 31.639 12.3124 31.6361 12.2933 31.6319C12.2551 31.6236 12.1968 31.6105 12.1201 31.5916C11.9669 31.5537 11.7407 31.493 11.4561 31.403C10.8868 31.2228 10.0855 30.9255 9.16879 30.4595C7.45348 29.5876 5.34116 28.1289 3.58181 25.7465L4.96276 25.2945C6.26956 24.8669 8.20977 24.2322 10.7434 23.4041C15.7068 21.7817 22.9476 19.4167 32.1651 16.411C32.168 16.6717 32.1628 17.012 32.1367 17.4164C32.0719 18.419 31.8791 19.8118 31.3669 21.365C30.3458 24.4614 28.0526 28.2101 22.9264 30.7911L22.9189 30.7946L22.8791 30.8128C22.8429 30.8292 22.7879 30.8536 22.715 30.8845C22.5691 30.9464 22.3522 31.0341 22.0733 31.135C21.5151 31.337 20.7105 31.5912 19.7319 31.797C17.7713 32.2091 15.1339 32.4224 12.3849 31.652Z" fill="currentColor" stroke="currentColor" strokeWidth="0.93"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
