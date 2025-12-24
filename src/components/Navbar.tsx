import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import constantData from "@/constant/constant";
import { Button } from "./ui/button";
// Basic Button Component to replace shadcn/ui dependency for preview


const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Zahoor-Abbas-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "py-3"
        : "py-5"
        }`}
    >
      <nav
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500"
      >
        <div
          className={`flex items-center justify-between px-4 py-2 mx-auto transition-all duration-500 rounded-full border ${isScrolled
            ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-slate-200 dark:border-slate-800 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
            : "bg-transparent border-transparent"
            }`}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <a href="#" className="group flex items-center gap-2">
              <span className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                {constantData.name.split(' ')[0]}   {constantData.name.split(' ')[1]}
                <span className="text-blue-600">.</span>
              </span>
              {/* <div className="hidden sm:flex items-center px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                {constantData.role.split(' ')[0]}
              </div> */}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center mr-4 pr-4 border-r border-slate-200 dark:border-slate-800 space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                >
                  {item.name}
                  <span className="absolute bottom-1.5 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 -translate-x-1/2 group-hover:w-1/3" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button onClick={handleDownloadCV} size="sm" className="rounded-full px-5 hidden lg:flex font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                Resume
              </Button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`absolute top-full left-4 right-4 mt-2 overflow-hidden transition-all duration-300 md:hidden ${isMobileMenuOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800">
                <Button className="w-full rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">Get in Touch</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}