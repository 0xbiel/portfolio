export default function About() {
  return (
    <section id="about" className="mt-16 space-y-4 scroll-mt-20">
      <div className="flex items-center space-x-2 text-sm opacity-80">
        <span className="flex items-center gap-2">
          <img src="pin.svg" alt="pin" className="w-4 h-4 dark:invert" />
          Mallorca, Spain
        </span>
        <span className="text-xs">•</span>
        <span>Full Stack Dev</span>
      </div>
      <p className="text-lg leading-relaxed text-[16px]">
        👋 Hi! I&apos;m Biel, a 19-year-old Computer Engineering and Business
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
        href="#contact"
        className="inline-block mt-4 px-6 py-3 bg-[var(--main-color)] font-semibold text-center hover:opacity-90 transition hover:bg-[var(--opposite)]"
        style={{ color: "white" }}
      >
        Get in Touch
      </a>
    </section>
  );
}