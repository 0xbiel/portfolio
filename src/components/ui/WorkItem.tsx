import Image from "next/image";

interface WorkItemProps {
  company: string;
  position: string;
  period: string;
  description: string;
  logo?: string;
  logoAlt?: string;
  emoji?: string;
}

export default function WorkItem({
  company,
  position,
  period,
  description,
  logo,
  logoAlt,
  emoji = "🏢",
}: WorkItemProps) {
  const isEmojiUrl =
    emoji && (emoji.startsWith("http://") || emoji.startsWith("https://"));

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{company}</h3>
          <p className="text-sm opacity-80">{position}</p>
          <p className="text-sm opacity-80">{period}</p>
        </div>
        <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  {logo ? (
                    <Image src={logo} alt={logoAlt || company} width={24} height={24} />
                  ) : isEmojiUrl ? (
                    <Image src={emoji} alt={company} width={24} height={24} />
                  ) : (
                    <span className="text-lg">{emoji}</span>
                  )}
                </div>
      </div>
      <p className="mt-3 text-sm">{description}</p>
    </div>
  );
}
