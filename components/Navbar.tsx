"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles, Code2, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import ContactModal from "./ContactModal";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/home" },
    { name: "Projetos", href: "/home?tab=projetos#portfolio" },
    { name: "Stacks", href: "/home?tab=tecnologias#portfolio" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? "py-4" : "py-8"}`}>
      <div className="container mx-auto px-6">
        <div className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-500 ${isScrolled
          ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-2xl py-3 px-6"
          : "bg-transparent border-transparent py-0 px-0"
          }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="group flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">S</span>
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-tight text-lg leading-tight">Sebastian</span>
                <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">Deenvolveor Software</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-1/2" />
                </a>
              ))}
              <div className="h-4 w-px bg-white/10 mx-2" />
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/sebastianaugusto/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="https://github.com/sebastianaugustolopes" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors"><Github size={18} /></a>
              </div>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Button
                variant="hero"
                size="sm"
                className="gap-2"
                onClick={() => setIsContactModalOpen(true)}
              >
                <Sparkles size={14} />
                <span>Vamos conversar</span>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-white/70 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[-1] transition-all duration-500 md:hidden ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-bold hover:text-purple-500 transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="hero"
            size="lg"
            className="w-full max-w-xs mt-4"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsContactModalOpen(true);
            }}
          >
            Contato
          </Button>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
