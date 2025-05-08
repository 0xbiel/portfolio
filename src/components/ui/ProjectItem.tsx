import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  role: string;
  description: string;
  link?: string;
  logo?: string;
  logoAlt?: string;
  emoji?: string;
  technologies?: string[];
  screenshot?: string; // Add screenshot URL
}

export default function ProjectItem({
  title,
  role,
  description,
  link,
  logo,
  logoAlt,
  emoji = "💻",
  technologies = [],
  screenshot, // Add screenshot parameter
}: ProjectItemProps) {
  // Check if emoji is a URL
  const isEmojiUrl =
    emoji && (emoji.startsWith("http://") || emoji.startsWith("https://"));

  const Content = () => (
    <>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm opacity-80">{role}</p>
        </div>
        <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
          {logo ? (
            <Image src={logo} alt={logoAlt || title} width={24} height={24} />
          ) : isEmojiUrl ? (
            <Image src={emoji} alt={title} width={24} height={24} />
          ) : (
            <span className="text-lg">{emoji}</span>
          )}
        </div>
      </div>

      {/* Project Screenshot */}
      {screenshot && (
        <div className="mt-4 overflow-hidden border border-neutral-200 dark:border-neutral-800">
          <Image
            src={screenshot}
            alt={`${title} screenshot`}
            width={500}
            height={300}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <p className="mt-3 text-sm">{description}</p>

      {/* Technology tags */}
      {technologies.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        className="block border border-neutral-200 dark:border-neutral-800 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
      >
        <Content />
      </Link>
    );
  }

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition">
      <Content />
    </div>
  );
}
