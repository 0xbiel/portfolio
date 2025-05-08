"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/ui/Header";
import WorkItem from "@/components/ui/WorkItem";
import ProjectItem from "@/components/ui/ProjectItem";
import ProjectFilter from "@/components/ui/ProjectFilter";

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
      <div className="max-w-3xl mx-auto min-h-screen px-6 py-12">
        {/* Main Content */}
        <main className="space-y-20">
          {/* Introduction */}
          <section className="space-y-4">
            <h1 className="text-3xl font-bold text-[var(--main-color)]">
              0xbiel
            </h1>
            <div className="flex items-center space-x-2 text-sm opacity-80">
              <span className="flex items-center gap-2">
                <img src="pin.svg" alt="pin" className="w-4 h-4 dark:invert" />
                Mallorca, Spain
              </span>
              <span className="text-xs">•</span>
              <span>Full Stack Dev</span>
            </div>
            <p className="text-lg leading-relaxed text-[16px]">
              👋 Hi! I&apos;m Biel, a 19y/o Computer Engineering and Business
              Administration undergraduate. I love learning and constantly
              improving. Right now, I&apos;m especially interested in DeFi and
              EVM-based projects.
            </p>
            <p className="text-lg leading-relaxed text-[16px]">
              When I&apos;m not coding or diving into something new, you&apos;ll probably
              find me out running, looking at charts and stats, or behind the
              wheel in a racing sim.
            </p>
            <a
              href="#links"
              className="inline-block mt-4 px-6 py-3 bg-[var(--main-color)] border font-semibold text-center hover:opacity-90 transition hover:bg-white"
              style={{ color: "black" }}
            >
              Get in Touch
            </a>
          </section>

          {/* Skills */}
          <section id="skills" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="p-0.75 w-50 bg-[var(--main-color)]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-neutral-200 dark:border-neutral-800 p-4">
                <h3 className="text-lg font-semibold">Languages</h3>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      alt="Python"
                      className="w-6 h-6"
                    />
                    <span>Python</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      className="w-6 h-6"
                    />
                    <span>JavaScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                      className="w-6 h-6"
                    />
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
                      alt="Solidity"
                      className="w-6 h-6 dark:invert"
                    />
                    <span>Solidity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
                      alt="Swift"
                      className="w-6 h-6"
                    />
                    <span>Swift</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
                      alt="Rust"
                      className="w-6 h-6 dark:invert"
                    />
                    <span>Rust</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                      alt="Java"
                      className="w-6 h-6"
                    />
                    <span>Java</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                      alt="C#"
                      className="w-6 h-6"
                    />
                    <span>C#</span>
                  </li>
                </ul>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-800 p-4">
                <h3 className="text-lg font-semibold">Tools & Technologies</h3>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      alt="Next.js"
                      className="w-6 h-6 dark:invert"
                    />
                    <span>Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React"
                      className="w-6 h-6"
                    />
                    <span>React</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                      className="w-6 h-6"
                    />
                    <span>Node.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                      alt="Tailwind CSS"
                      className="w-6 h-6"
                    />
                    <span>Tailwind CSS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://getfoundry.sh/logo.png"
                      alt="Foundry"
                      className="w-6 h-6"
                    />
                    <span>Foundry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://hardhat.org/favicon.ico"
                      alt="Hardhat"
                      className="w-6 h-6"
                    />
                    <span>Hardhat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                      alt="PostgreSQL"
                      className="w-6 h-6"
                    />
                    <span>PostgreSQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                      alt="Firebase"
                      className="w-6 h-6"
                    />
                    <span>Firebase</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                      alt="Redis"
                      className="w-6 h-6"
                    />
                    <span>Redis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <img
                      src="https://viem.sh/icon-light.png"
                      alt="Viem"
                      className="w-6 h-6 dark:invert"
                    />
                    <span>Viem</span>
                  </li>
                </ul>
              </div>
            </div>
            
          </section>

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

          {/* Work Experience */}
          <section id="education" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="p-0.75 w-50 bg-[var(--main-color)]" />
            <div className="space-y-8">
              <WorkItem
                position="Universitat Politècnica de València"
                company="Computer Engineering & Business Administration (Double Degree)"
                period="2024 - Present"
                description="Currently studying a double degree focused on building a strong foundation in both tech and business."
                emoji="https://www.upv.es/favicon.ico"
              />
              <WorkItem
                company="English B2 Certificate"
                position="Cambridge English"
                period="2021"
                description=""
                emoji="https://upload.wikimedia.org/wikipedia/commons/a/a3/Cambridge_University_Crest_-_flat.png"
              />
            </div>
          </section>

          {/* Links/Contact */}
          <section id="links" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold">Links</h2>
            <div className="p-0.75 w-50 bg-[var(--main-color)]" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <a
                href="mailto:hello@biel.codes"
                className="border border-neutral-200 dark:border-neutral-800 p-4 text-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
              >
                Email
              </a>
              <a
                href="https://github.com/0xbiel"
                target="_blank"
                className="border border-neutral-200 dark:border-neutral-800 p-4 text-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
              >
                GitHub
              </a>
              <a
                href="https://x.com/0xbiel"
                target="_blank"
                className="border border-neutral-200 dark:border-neutral-800 p-4 text-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
              >
                Twitter
              </a>
              <a
                href="https://dune.com/0xbiel"
                target="_blank"
                className="border border-neutral-200 dark:border-neutral-800 p-4 text-center hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
              >
                Dune
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex justify-between items-center">
            <div className="text-sm text-[var(--main-color)] font-600">© 2025 0xbiel</div>
          </div>
        </footer>
      </div>
    </>
  );
}
