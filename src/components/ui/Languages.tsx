import React from "react";

export type LanguageCertificate = {
  title: string;
  issuer?: string;
  year?: string;
  link?: string;
};

export type LanguageItem = {
  name: string;
  proficiency: string;
  certificate?: LanguageCertificate;
};

export type LanguagesProps = {
  id?: string;
  heading?: string;
  languages?: LanguageItem[];
};

export const defaultLanguages: LanguageItem[] = [
  {
    name: "Catalan",
    proficiency: "Native or bilingual proficiency",
  },
  {
    name: "English",
    proficiency: "Full professional proficiency",
    certificate: {
      title: "English B2 Certificate",
      issuer: "Cambridge English",
      year: "2021",
    },
  },
  {
    name: "Spanish",
    proficiency: "Native or bilingual proficiency",
  },
];

const Languages: React.FC<LanguagesProps> = ({
  id = "languages",
  heading = "Languages",
  languages = defaultLanguages,
}) => {
  const sortedLanguages = [...languages].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <section id={id} className="space-y-6 scroll-mt-20">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <div className="p-0.75 w-50 bg-[var(--main-color)]" />
      <div className="space-y-4">
        {sortedLanguages.map((language) => (
          <div
            key={language.name}
            className="border border-neutral-200 dark:border-neutral-800 p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-lg font-semibold">{language.name}</span>
              <span className="text-sm opacity-80 text-right">
                {language.proficiency}
              </span>
            </div>
            {language.certificate && (
              <div className="flex items-center gap-2 text-sm">
                <span className="px-2 py-1 bg-[var(--main-color)]/10 text-[var(--main-color)] rounded">
                  {language.certificate.title}
                </span>
                <span className="opacity-80">
                  {language.certificate.issuer}
                  {language.certificate.year ? ` · ${language.certificate.year}` : ""}
                </span>
                {language.certificate.link && (
                  <a
                    href={language.certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--main-color)] underline"
                  >
                    View
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
