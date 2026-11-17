"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Menu, X, ArrowRight, Building2 } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Corporate Profile", href: "#corporate-profile" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold shadow-md shadow-slate-900/10 group-hover:bg-slate-800 transition-colors">
              <span className="text-emerald-400 font-extrabold text-lg tracking-tight">CC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-950 flex items-center gap-1.5">
                CLEAN CONNECT
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                RC / BN 8897831 • CAC Verified
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-emerald-600 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
