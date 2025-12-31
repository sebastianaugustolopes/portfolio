"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ProfileCard from "@/components/ProfileCard";
import TechBadge from "@/components/TechBadge";
import SocialIcons from "@/components/SocialIcons";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Badge } from "@/components/ui/badge";
const heroBg = "/hero-bg-studio.jpg";
import type { PersonalInfo } from "@/db/schema";

const Home = () => {
  const skills = ["Nodejs","JavaScript", "TypeScript", "Nextjs"];
  const [typedText, setTypedText] = useState("");
  const fullText = "JavaScript Ecosystem & Software Architecture";
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    async function fetchPersonalInfo() {
      try {
        const res = await fetch("/api/personal-info");
        const data = await res.json();
        setPersonalInfo(data);
      } catch (error) {
        console.error("Error fetching personal info:", error);
      }
    }
    fetchPersonalInfo();
  }, []);

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        // Wait for page to render
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const offset = 100; // Offset for navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);


  return (
    <div className="min-h-screen bg-background relative">
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 overflow-hidden">
        {/* Grid pattern background */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[calc(100vh-5rem)]">
            {/* Left side - Text content */}
            <div className="space-y-6 pt-8 lg:pt-0">
              {/* Badge */}
              <ScrollReveal delay={0.1}>
                <Badge variant="glow" className="px-3 py-1.5 text-xs hover:scale-105 transition-transform">
                  <Sparkles size={12} className="mr-1.5" />
                  Pronto para Inovar
                </Badge>
              </ScrollReveal>

              {/* Title */}
              <ScrollReveal delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Desenvolvedor</span>
                  <br />
                  <span className="text-gradient">Full Stack</span>
                </h1>
              </ScrollReveal>

              {/* Typing subtitle */}
              <ScrollReveal delay={0.3}>
                <p className="text-base text-muted-foreground font-medium">
                  {typedText}<span className="animate-pulse text-primary">|</span>
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2 max-w-md leading-relaxed">
                  Criando soluções digitais inovadoras, funcionais e amigáveis para o seu negócio.
                </p>
              </ScrollReveal>

              {/* Skills */}
              <ScrollReveal delay={0.4}>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <TechBadge key={skill} tech={skill} size="md" />
                  ))}
                </div>
              </ScrollReveal>

              {/* CTA Buttons */}
              <ScrollReveal delay={0.5}>
                <div className="flex gap-3">
                  <a href="#projetos">
                    <Button 
                      variant="outline" 
                      size="default" 
                      className="bg-secondary/80 border-border/60 hover:bg-secondary text-foreground text-sm group hover:scale-105 transition-all duration-300"
                    >
                      Projetos
                      <ExternalLink size={14} className="ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Button>
                  </a>
                  <a href="#contato">
                    <Button 
                      variant="outline" 
                      size="default"
                      className="bg-transparent border-border/60 hover:border-primary/50 text-muted-foreground hover:text-foreground text-sm hover:scale-105 transition-all duration-300"
                    >
                      Contato
                      <Mail size={14} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal delay={0.6}>
                <SocialIcons 
                  socialLinks={personalInfo?.socialLinks} 
                  size={18}
                  variant="compact"
                  className="flex items-center gap-3 pt-2"
                />
              </ScrollReveal>
            </div>

            {/* Right side - Profile Card */}
            <ScrollReveal delay={0.3} direction="scale">
              <div className="flex justify-center lg:justify-end">
                <ProfileCard />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content wrapper with grid background (excludes hero) */}
      <div className="relative bg-black">
        {/* Grid pattern for portfolio sections */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* About Section */}
        <AboutSection />

        {/* Portfolio Section */}
      <PortfolioSection />

        {/* Contact Section */}
        <ContactSection />

        <Footer />
      </div>
    </div>
  );
};

export default Home;

