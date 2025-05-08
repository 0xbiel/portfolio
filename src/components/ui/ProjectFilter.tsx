export default function ProjectFilter({
  categories,
  activeCategory,
  onChange,
}: {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        onClick={() => onChange("All")}
        className={`px-3 py-1 text-sm transition ${
          activeCategory === "All"
            ? "bg-neutral-800 text-white dark:bg-white dark:text-black"
            : "bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-3 py-1 text-sm transition ${
            activeCategory === category
              ? "bg-neutral-800 text-white dark:bg-white dark:text-black"
              : "bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
