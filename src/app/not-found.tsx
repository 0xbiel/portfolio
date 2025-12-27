import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-foreground flex flex-col">
      <Navbar forceScrolled />

      <main className="flex-1 w-full flex items-center">
        <div className="max-w-3xl w-full mx-auto px-6 flex flex-col items-start text-left gap-7">
          <p className="text-6xl sm:text-7xl font-black tracking-tight text-[var(--main-color)]">404</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Page not found</h1>
          <p className="text-base sm:text-lg max-w-xl leading-relaxed text-[var(--muted-foreground)]">
            The page you&apos;re looking for doesn&apos;t exist. Head back home or jump to projects to keep exploring.
          </p>
          <div>
            <Link
              href="/"
              className="px-6 py-3 rounded-none bg-[var(--main-color)] text-white font-semibold shadow-lg shadow-[var(--main-color)]/25 hover:-translate-y-0.5 active:translate-y-0 transition-transform"
            >
              Go home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
