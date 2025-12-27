import React from "react";

export type SkillItem = {
  name: string;
  icon: string;
  alt?: string;
  className?: string;
  source?: string;
  level?: "Main" | "Comfortable" | "Learning";
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export type SkillsProps = {
  id?: string;
  heading?: string;
  categories?: SkillCategory[];
};

export const skillsData: SkillCategory[] = [
  {
    title: "Primary stack",
    items: [
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        level: "Main",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: "Main",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        level: "Main",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        level: "Main",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        level: "Comfortable",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        level: "Comfortable",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        level: "Comfortable",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        level: "Main",
      },
    ],
  },
  {
    title: "Web3 tooling",
    items: [
      {
        name: "Solidity",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
        className: "dark:invert",
        level: "Comfortable",
      },
      {
        name: "Foundry",
        icon: "https://getfoundry.sh/foundry-logo.png",
        level: "Comfortable",
      },
      {
        name: "Hardhat",
        icon: "https://hardhat.org/favicon.ico",
        level: "Comfortable",
      },
      {
        name: "Viem",
        icon: "https://viem.sh/icon-light.png",
        className: "dark:invert",
        level: "Comfortable",
      },
    ],
  },
  {
    title: "Languages & other",
    items: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        level: "Comfortable",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        level: "Comfortable",
      },
      {
        name: "Rust",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
        className: "dark:invert",
        level: "Learning",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        source: "UPV",
        level: "Comfortable",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        source: "UPV",
        level: "Comfortable",
      },
      {
        name: "C#",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        level: "Comfortable",
      },
      {
        name: "Swift",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        level: "Learning",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        level: "Comfortable",
      },
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        source: "UPV",
        level: "Learning",
      },
      {
        name: "Cisco IOS",
        icon: "/images/cisco.png",
        source: "UPV",
        level: "Comfortable",
      },
    ],
  },
];

const Skills: React.FC<SkillsProps> = ({
  id = "skills",
  heading = "Skills",
  categories = skillsData,
}) => {
  const levelBadgeStyles: Record<NonNullable<SkillItem["level"]>, string> = {
    Main: "bg-[var(--opposite)]/15 text-[var(--opposite)] dark:bg-[var(--opposite)]/20",
    Comfortable: "bg-[var(--main-color)]/15 text-[var(--main-color)] dark:bg-[var(--main-color)]/20",
    Learning: "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50",
  };

  return (
    <section id={id} className="space-y-6 scroll-mt-20">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <div className="p-0.75 w-50 bg-[var(--main-color)]" />
      <div className="space-y-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="space-y-3 border border-neutral-200 dark:border-neutral-800 p-5"
            aria-label={`${category.title} skills`}
          >
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-3 border border-neutral-200 dark:border-neutral-800 bg-white px-3 py-2 text-sm dark:bg-neutral-900"
                  aria-label={`${item.name}${item.level ? ` (${item.level})` : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                      <img
                        src={item.icon}
                        alt={item.alt || item.name}
                        className={["h-6 w-6 object-contain", item.className]
                          .filter(Boolean)
                          .join(" ")}
                      />
                    </div>
                    <div className="leading-tight">
                      <span className="font-medium">{item.name}</span>
                      {item.source && (
                        <span className="block text-[11px] text-neutral-500">Learned at {item.source}</span>
                      )}
                    </div>
                  </div>
                  {item.level && (
                    <span
                      className={[
                        "px-2.5 py-1 text-[11px] font-semibold tracking-wide",
                        levelBadgeStyles[item.level],
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {item.level}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
