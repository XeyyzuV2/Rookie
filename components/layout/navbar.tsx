"use client";

import Link from "next/link";
import { useState, useEffect, useSyncExternalStore } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

// @note handles navigation with floating center layout and theme toggle
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const hydrated = useHydrated();

  const handleToggle = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 200);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeTheme = hydrated ? resolvedTheme : undefined;
  const nextTheme = activeTheme === "dark" ? "light" : "dark";
  const ThemeIcon = activeTheme === "dark" ? Sun : Moon;

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${isScrolled ? "top-0 px-6 py-4" : "top-4 px-4 py-4 md:top-12 md:px-6"}`}
    >
      <div
        className={`mx-auto w-full transition-all duration-300 ${isScrolled ? "max-w-[85%] md:w-[60%]" : "max-w-[90%] md:w-[50%]"}`}
      >
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-background/80 px-6 py-2 backdrop-blur-md md:gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Gurotopia
          </Link>

          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/gurotopia"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              GitHub
            </Link>
          </div>

          <button
            onClick={() => setTheme(nextTheme)}
            className="hidden rounded-lg border border-border p-2 transition-colors hover:bg-muted md:block"
            aria-label="Toggle theme"
          >
            <ThemeIcon className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setTheme(nextTheme)}
              className="rounded-lg border border-border p-2 transition-colors hover:bg-muted"
              aria-label="Toggle theme"
            >
              <ThemeIcon className="h-4 w-4" />
            </button>
            <button onClick={handleToggle} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className={`mt-2 w-full rounded-lg border border-border bg-background/80 backdrop-blur-md md:hidden ${isClosing ? "animate-out fade-out slide-out-to-top-2 duration-200" : "animate-in fade-in slide-in-from-top-2 duration-200"}`}
          >
            <div className="space-y-1 px-6 py-4">
              <Link
                href="#features"
                className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={handleToggle}
              >
                Features
              </Link>
              <Link
                href="#about"
                className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={handleToggle}
              >
                About
              </Link>
              <Link
                href="/docs"
                className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={handleToggle}
              >
                Docs
              </Link>
              <Link
                href="https://github.com/gurotopia"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-sm font-medium text-foreground"
                onClick={handleToggle}
              >
                GitHub
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
