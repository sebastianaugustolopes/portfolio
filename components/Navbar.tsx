"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/home#sobre" },
    { name: "Portfólio", href: "/home#portfolio" },
    { name: "Contato", href: "#" },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === "#") {
      e.preventDefault();
      setIsContactOpen(true);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div
            className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-500 ${
              isScrolled
                ? "border-border/40 bg-card/60 backdrop-blur-2xl shadow-2xl glow-primary"
                : "border-border/20 bg-card/30 backdrop-blur-xl"
            }`}
          >
            {/* Subtle top border glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            
            <div className="relative px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                {/* Enhanced Logo */}
                <Link
                  href="/home"
                  className="group flex items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative">
                    <div className="absolute inset-0 " />
                    <span className="relative text-xl lg:text-2xl font-bold text-gradient">
                      SA
                    </span>
                  </div>
                  <Code2 
                    size={18} 
                    className="text-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12" 
                  />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 lg:gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href || 
                      (link.href !== "/" && pathname.startsWith(link.href));
                    
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(link.href, e)}
                        className="group relative px-4 py-2 transition-all duration-300"
                      >
                        {/* Active indicator */}
                        {isActive && (
                          <div className="absolute inset-0 bg-primary/10 rounded-lg animate-fade-in" />
                        )}
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <span
                          className={`relative text-sm lg:text-base font-medium transition-all duration-300 ${
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {link.name}
                        </span>
                        
                        {/* Bottom indicator */}
                        <div
                          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 ${
                            isActive
                              ? "w-full opacity-100"
                              : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-60"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>

                {/* Enhanced CTA Button */}
                <div className="hidden md:flex items-center gap-3">
                  <Button
                    variant="gradient"
                    size="sm"
                    onClick={() => setIsContactOpen(true)}
                    className="group relative overflow-hidden px-6 hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles size={14} className="transition-transform duration-300 group-hover:rotate-12" />
                      Contato
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>

                {/* Enhanced Mobile Menu Button */}
                <button
                  className="md:hidden relative p-2 rounded-lg text-foreground transition-all duration-300 hover:bg-primary/10 active:scale-95"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <div className="relative w-6 h-6">
                    <Menu
                      size={24}
                      className={`absolute inset-0 transition-all duration-300 ${
                        isMobileMenuOpen
                          ? "opacity-0 rotate-180 scale-0"
                          : "opacity-100 rotate-0 scale-100"
                      }`}
                    />
                    <X
                      size={24}
                      className={`absolute inset-0 transition-all duration-300 ${
                        isMobileMenuOpen
                          ? "opacity-100 rotate-0 scale-100"
                          : "opacity-0 rotate-180 scale-0"
                      }`}
                    />
                  </div>
                </button>
              </div>

              {/* Enhanced Mobile Menu */}
              <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${
                  isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-4 mt-4 border-t border-border/30">
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href;
                      
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={(e) => handleNavClick(link.href, e)}
                          className={`group relative px-4 py-3 rounded-lg transition-all duration-300 animate-fade-in ${
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <span className="flex items-center justify-between text-sm font-medium">
                            {link.name}
                            {isActive && (
                              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-subtle" />
                            )}
                          </span>
                        </Link>
                      );
                    })}
                    
                    <Button
                      variant="gradient"
                      size="sm"
                      onClick={() => {
                        setIsContactOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full mt-2 animate-fade-in"
                      style={{ animationDelay: `${navLinks.length * 50}ms` }}
                    >
                      <Sparkles size={14} className="mr-2" />
                      Contato
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;