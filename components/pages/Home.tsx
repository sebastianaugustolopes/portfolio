
"use client";

import { useEffect, useState } from "react";
import { Sparkles, ArrowDown, Code, Zap } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PortfolioSection from "../PortfolioSection";
import AboutSection from "../AboutSection";
import ContactSection from "../ContactSection";
import ProfileCard from "../ProfileCard";
import TechBadge from "../TechBadge";
import SocialIcons from "../SocialIcons";
import { ScrollReveal } from "../ScrollReveal";
import { Button } from "../ui/button";

const Home = () => {
  const skills = ["Node.js", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind", "Angular", "PostgreSQL", "Prisma"];
  const [typedText, setTypedText] = useState("");
  const fullText = "Especialista em ecossistemas JavaScript e sistemas distribuídos.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] relative overflow-x-hidden">
      <Navbar />
      
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="grid-pattern-elegant absolute inset-0 opacity-10" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <section className="relative z-10 min-h-screen flex items-center pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Column */}
            <div className="space-y-12">
              <ScrollReveal delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white/50">Online</span>
                </div>
              </ScrollReveal>

              <div className="space-y-2">
                {/* Headline Redesign */}
                <h1 className="flex flex-col text-6xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tighter text-white">
                  <ScrollReveal delay={0.2} direction="up" className="flex items-center gap-4">
                    <span className="hover:scale-105 transition-transform duration-500 cursor-default">CRAFTING</span>
                    <div className="h-px w-20 md:w-40 bg-white/10 hidden md:block" />
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.4} direction="up" className="relative ml-8 md:ml-16 py-2">
                    <span className="font-serif italic font-medium text-purple-400 md:text-[1.1em] tracking-normal z-10 relative drop-shadow-2xl">
                      Exceptional
                    </span>
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-purple-600/20 blur-[80px] rounded-full -z-10 animate-pulse" />
                  </ScrollReveal>
                  
                  <ScrollReveal delay={0.6} direction="up" className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 animate-float hidden lg:flex">
                      <Code size={24} />
                    </div>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">
                      IDENTITIES.
                    </span>
                  </ScrollReveal>
                </h1>
              </div>

              <ScrollReveal delay={0.8} className="space-y-8">
                <div className="max-w-md space-y-4">
                  <p className="text-xl text-white/40 font-medium leading-relaxed">
                    {typedText}<span className="animate-pulse text-purple-500">|</span>
                  </p>
                  <div className="h-1 w-20 bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <TechBadge key={skill} tech={skill} size="sm" />
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Profile Column */}
            <div className="hidden lg:flex justify-end items-center h-full relative">
              <ScrollReveal direction="scale" delay={0.4} className="relative z-10">
                <ProfileCard />
              </ScrollReveal>
              
              {/* Decorative Geometric Element */}
              <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] border-[1px] border-white/5 rounded-full pointer-events-none -z-0" />
              <div className="absolute -right-10 -bottom-10 w-[400px] h-[400px] border-[1px] border-white/[0.02] rounded-full pointer-events-none -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Areas */}
      <div className="relative z-10 space-y-32 pb-20">
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
