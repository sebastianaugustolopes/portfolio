"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

const heroBg = "/hero-bg.jpg";

const Landing = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Sophisticated Grid Pattern */}
      <div className="grid-pattern-elegant" />
      <div className="noise-texture-refined" />
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[35s] ease-out hover:scale-110"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: 'scale(1.05)',
        }}
      />
      
      {/* Black Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/30" />
      
      {/* Sophisticated Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[180px] animate-glow-elegant" />
      <div className="absolute bottom-1/4 -right-20 w-[550px] h-[550px] bg-accent/12 rounded-full blur-[160px] animate-glow-elegant-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] animate-pulse-ambient-soft" />

      {/* Refined Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-elegant"
            style={{
              width: `${1.5 + (i % 3) * 0.5}px`,
              height: `${1.5 + (i % 3) * 0.5}px`,
              background: i % 3 === 0 
                ? 'hsl(40 2% 72% / 0.25)' 
                : i % 3 === 1 
                ? 'hsl(56 23% 87% / 0.2)' 
                : 'hsl(80 10% 93% / 0.15)',
              left: `${8 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${10 + (i % 4) * 3}s`,
              boxShadow: '0 0 15px currentColor, 0 0 30px currentColor'
            }}
          />
        ))}
      </div>

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_hsl(0_0%_0%_/_0.4)_100%)] opacity-30" />

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto lg:mx-0">
            
            {/* Refined Badge Section */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="relative">
                <div className="absolute inset-0 w-12 h-[1.5px] bg-gradient-to-r from-primary/60 to-transparent blur-sm" />
                <div className="relative w-12 h-[1.5px] bg-gradient-to-r from-primary/60 to-transparent" />
              </div>
              <Code2 size={16} className="text-primary/60 animate-pulse-soft" />
            </div>
            
            <div className="animate-fade-in opacity-0 mb-8" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <Badge variant="glow" className="px-4 py-2 text-sm tracking-wider hover:scale-105 transition-all duration-500 cursor-default backdrop-blur-2xl bg-foreground/5 border-foreground/10 group">
                <Sparkles size={15} className="mr-2 animate-pulse-soft group-hover:rotate-12 transition-transform duration-500" />
                <span className="font-medium bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Full Stack Developer</span>
              </Badge>
            </div>

            {/* Enhanced Title */}
            <h1 
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in opacity-0 tracking-tight"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <span className="text-foreground/95 font-light block mb-2">Criando</span>
              <span className="bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent font-extrabold block mb-2 relative">
                experiências
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 blur-2xl -z-10" />
              </span>
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                <span className="text-foreground/95 font-light">digitais</span>
                <span className="bg-gradient-to-br from-accent via-primary to-foreground bg-clip-text text-transparent font-extrabold">únicas</span>
              </div>
            </h1>

            {/* Refined Subtitle */}
            <p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground/90 max-w-2xl mb-8 leading-relaxed animate-fade-in opacity-0 font-light"
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              Transformando ideias complexas em interfaces elegantes. 
              Especializado em <span className="text-primary/90 font-medium">React</span>, <span className="text-primary/90 font-medium">Next.js</span> e JavaScript moderno.
            </p>

            {/* Enhanced CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-in opacity-0"
              style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
            >
              <Link href="/home">
                <Button variant="hero" size="lg" className="group relative w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 hover:scale-105 transition-all duration-500 overflow-hidden shadow-elegant">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Rocket size={18} className="relative z-10 mr-2 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-6" />
                  <span className="relative z-10">Explorar Portfólio</span>
                  <ArrowRight size={18} className="relative z-10 ml-2 transition-all duration-500 group-hover:translate-x-2" />
                </Button>
              </Link>
              
              <Link href="/home#projetos">
                <Button variant="glass" size="lg" className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 backdrop-blur-2xl bg-foreground/5 border-foreground/10 hover:scale-105 hover:bg-foreground/10 hover:border-primary/30 transition-all duration-500">
                  <Code2 size={16} className="mr-2 transition-all duration-500 group-hover:rotate-180" />
                  Ver Projetos
                  <Zap size={14} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                </Button>
              </Link>
            </div>

            {/* Refined Tech Stack */}
            <div 
              className="flex flex-wrap gap-3 sm:gap-4 items-center animate-fade-in opacity-0"
              style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
            >
              {[
                { label: "React & Next.js", delay: "0s" },
                { label: "TypeScript", delay: "0.15s" },
                { label: "UI/UX Design", delay: "0.3s" }
              ].map((tech, i) => (
                <div 
                  key={i}
                  className="group relative flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground/80 px-4 py-2 rounded-full backdrop-blur-2xl bg-card/20 border border-border/30 hover:bg-card/40 hover:border-primary/30 transition-all duration-500 hover:scale-105 cursor-default"
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse-glow-soft"
                    style={{ animationDelay: tech.delay }}
                  />
                  <span className="font-mono font-medium tracking-wide">{tech.label}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-elegant opacity-0 animate-fade-in hidden sm:flex" style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col items-center gap-3 text-muted-foreground/50 group cursor-pointer hover:text-muted-foreground/70 transition-colors duration-500">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
          <div className="relative w-5 h-9 rounded-full border border-current flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full animate-scroll-dot-smooth" />
          </div>
        </div>
      </div>

      {/* Refined Corner Accents */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 pointer-events-none hidden md:block opacity-40">
        <div className="absolute top-0 right-0 w-px h-12 sm:h-16 bg-gradient-to-b from-primary/30 to-transparent" />
        <div className="absolute top-0 right-0 w-12 sm:w-16 h-px bg-gradient-to-l from-primary/30 to-transparent" />
        <div className="absolute top-4 right-4 w-px h-8 sm:h-10 bg-gradient-to-b from-accent/20 to-transparent" />
        <div className="absolute top-4 right-4 w-8 sm:w-10 h-px bg-gradient-to-l from-accent/20 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 pointer-events-none hidden md:block opacity-40">
        <div className="absolute bottom-0 left-0 w-px h-12 sm:h-16 bg-gradient-to-t from-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        <div className="absolute bottom-4 left-4 w-px h-8 sm:h-10 bg-gradient-to-t from-accent/20 to-transparent" />
        <div className="absolute bottom-4 left-4 w-8 sm:w-10 h-px bg-gradient-to-r from-accent/20 to-transparent" />
      </div>
    </div>
  );
};

export default Landing;