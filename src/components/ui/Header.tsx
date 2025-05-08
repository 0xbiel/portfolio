"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-10 backdrop-blur-sm transition-all py-6 bg-background/80`}
    >
      <nav className="max-w-3xl mx-auto px-6 flex justify-end ">
        {/* Desktop nav */}
        <div className="hidden sm:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--main-color)] after:transition-all hover:after:w-full"
          >
            home
          </Link>
          <Link
            href="#skills"
            className="text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--main-color)] after:transition-all hover:after:w-full"
          >
            skills
          </Link>
          <Link
            href="#projects"
            className="text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--main-color)] after:transition-all hover:after:w-full"
          >
            projects
          </Link>
          <Link
            href="#education"
            className="text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--main-color)] after:transition-all hover:after:w-full"
          >
            education
          </Link>
          <Link
            href="#links"
            className="text-sm relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--main-color)] after:transition-all hover:after:w-full"
          >
            links
          </Link>
        </div>
        {/* Mobile nav */}
        <div className="sm:hidden flex items-center">
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
          {menuOpen && (
            <div className="absolute top-full right-6 mt-2 w-40 bg-background/95 rounded shadow-lg flex flex-col py-2 z-20">
              <Link
                href="/"
                className="px-4 py-2 text-sm hover:bg-[var(--main-color)]/10"
                onClick={() => setMenuOpen(false)}
              >
                home
              </Link>
              <Link
                href="#skills"
                className="px-4 py-2 text-sm hover:bg-[var(--main-color)]/10"
                onClick={() => setMenuOpen(false)}
              >
                skills
              </Link>
              <Link
                href="#projects"
                className="px-4 py-2 text-sm hover:bg-[var(--main-color)]/10"
                onClick={() => setMenuOpen(false)}
              >
                projects
              </Link>
              <Link
                href="#education"
                className="px-4 py-2 text-sm hover:bg-[var(--main-color)]/10"
                onClick={() => setMenuOpen(false)}
              >
                education
              </Link>
              <Link
                href="#links"
                className="px-4 py-2 text-sm hover:bg-[var(--main-color)]/10"
                onClick={() => setMenuOpen(false)}
              >
                links
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
