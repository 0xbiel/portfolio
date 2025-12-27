"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type NavbarProps = {
  forceScrolled?: boolean;
};

export default function Navbar({ forceScrolled = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledPastHeader, setIsScrolledPastHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = window.innerHeight; // header is full viewport height
      setIsScrolledPastHeader(window.scrollY > headerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navLinks = (
    <>
      <Link href="/#about" onClick={() => setMenuOpen(false)} className="px-4 py-3">
        about
      </Link>
      <Link href="/#skills" onClick={() => setMenuOpen(false)} className="px-4 py-3">
        skills
      </Link>
      <Link href="/#education" onClick={() => setMenuOpen(false)} className="px-4 py-3">
        education
      </Link>
       <Link href="/#languages" onClick={() => setMenuOpen(false)} className="px-4 py-3">
        languages
      </Link>
      <Link href="/#projects" onClick={() => setMenuOpen(false)} className="px-4 py-3">
        projects
      </Link>
      <Link href="/#contact" onClick={() => setMenuOpen(false)} className="px-4 py-3">
        contact
      </Link>
    </>
  );

  const scrolled = forceScrolled || isScrolledPastHeader;

  return (
    <>
  {/* Single floating navbar used both over the header and after scroll */}

      <nav
        className={`fixed left-1/2 top-6 z-20 -translate-x-1/2 w-[calc(100%-2rem)] max-w-3xl transition-all duration-300 transform  ${
          scrolled
            ? "opacity-100 translate-y-0 scale-100 shadow-xl bg-white/95 dark:bg-neutral-900/85"
            : "opacity-100 bg-white/95 dark:bg-neutral-900/85"
        }`}
      >
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between  py-2">
          {/* Brand (visible when scrolled) */}
          <Link
            className={`text-xl font-bold text-[var(--main-color)] transition-all duration-300 ease-out transform ${
              scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
            }`}
            href="/"
            
          >
            <div className={`text-xl font-bold text-[var(--main-color)] transition-all duration-300 ease-out transform ${
              scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
            }`}>
              0xbiel
            </div>
          </Link>

          {/* Desktop links: centered when not scrolled, right-aligned when scrolled */}
          <div className={`hidden sm:flex items-center space-x-6 text-sm transition-all duration-300 ease-out ${
            scrolled ? 'justify-end w-auto' : 'justify-center w-full'
          }`}
          >
            <Link
              href="/#about"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--main-color)] after:transition-all hover:after:w-full"
            >
              about
            </Link>
            <Link
              href="/#skills"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--main-color)] after:transition-all hover:after:w-full"
            >
              skills
            </Link>
            <Link
              href="/#education"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--main-color)] after:transition-all hover:after:w-full"
            >
              education
            </Link>
            <Link
              href="/#languages"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--main-color)] after:transition-all hover:after:w-full"
            >
              languages
            </Link>
            <Link
              href="/#projects"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--main-color)] after:transition-all hover:after:w-full"
            >
              projects
            </Link>
            <Link
              href="/#contact"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--main-color)] after:transition-all hover:after:w-full"
            >
              contact
            </Link>
          </div>

          {/* mobile hamburger */}
          <div className="sm:hidden">
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="text-2xl p-2 rounded-md"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu + backdrop */}
      {/* Backdrop */}
      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-30 transition-opacity ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />
      </div>

      {/* Sliding panel */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 z-40 h-full w-full max-w-xs sm:max-w-sm bg-white dark:bg-neutral-900 shadow-xl transform transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="text-lg font-bold text-[var(--main-color)]">0xbiel</div>
          <button
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-md text-2xl"
          >
            <HiX />
          </button>
        </div>
        <nav className="flex flex-col px-2 py-4 text-neutral-900 dark:text-neutral-100">
          {navLinks}
        </nav>
      </aside>
    </>
  );
}
