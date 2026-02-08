
"use client";

import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const BentoShowcase = () => {
  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center overflow-visible z-40 bg-transparent">
      {/* Dot Grid Background - "Solto" e integrado à página */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center max-w-4xl">
        <ScrollReveal delay={0.2} direction="scale" className="w-full flex items-center justify-center">
          <div className="relative w-full max-w-2xl aspect-[4/5] md:aspect-[3/4] flex items-center justify-center">
              
            {/* Main Central Card (The Samurai Silhouette) */}
            <div className="relative w-[70%] md:w-[60%] aspect-[3/4] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.8)] border border-white/10 group z-10 bg-neutral-900">
              <img 
                src="https://images.unsplash.com/photo-1542318238-439402501ab6?q=80&w=1200&auto=format&fit=crop" 
                alt="Samurai" 
                className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
              />
              {/* Atmospheric Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/60 via-transparent to-black/50 opacity-80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)] opacity-40" />
              
              {/* Decorative Accent on Card */}
              <div className="absolute top-8 left-8 w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:border-white/30 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-white/50 animate-pulse" />
              </div>
            </div>

            {/* Knowledge Card (Top Left) */}
            <div 
              className="absolute top-[12%] -left-[10%] md:left-[0%] w-40 md:w-48 p-6 rounded-[2.5rem] bg-[#1a1a1a] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.7)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.9)] transition-all duration-700 z-30"
              style={{
                animation: 'float 8s ease-in-out infinite',
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.3em]">Knowledge</span>
                <div className="w-7 h-7 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer border border-white/5">
                  <ArrowRight size={12} className="text-white/40" />
                </div>
              </div>
              
              {/* Big Kanji Character */}
              <div className="flex items-center justify-center py-4">
                <span className="text-[4rem] font-black text-white leading-none tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] select-none">
                  侍
                </span>
              </div>
              
              {/* User Bio Footer */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-white/10 overflow-hidden shrink-0 shadow-lg">
                  <img src="https://i.pravatar.cc/150?u=samurai1" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-black text-white uppercase tracking-tight truncate">Tensei 天聖</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="h-0.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white/40 rounded-full" style={{ width: '76%' }} />
                    </div>
                    <p className="text-[8px] text-white/40 font-mono">76%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Card (Top Right) */}
            <div 
              className="absolute top-[4%] -right-[8%] md:right-[0%] w-36 md:w-44 p-5 rounded-[2.5rem] bg-[#f2f2f2] border border-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.7)] transition-all duration-700 z-30"
              style={{
                animation: 'float 8s ease-in-out infinite',
                animationDelay: '2s'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[8px] font-black text-black/40 uppercase tracking-[0.3em]">Messages</span>
                <div className="bg-[#ff3b30] text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-[0_6px_15px_rgba(255,59,48,0.4)]">
                  28
                </div>
              </div>
              
              {/* Featured Asset Preview */}
              <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-gradient-to-br from-black/5 to-black/10 p-4 flex items-center justify-center group/msg cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400&auto=format&fit=crop" 
                  alt="Asset" 
                  className="w-[90%] h-[90%] object-contain transition-transform duration-1000 group-hover/msg:scale-115 group-hover/msg:rotate-6"
                />
              </div>
            </div>

            {/* Efficiency Card (Bottom Right) */}
            <div 
              className="absolute bottom-[10%] -right-[12%] md:right-[0%] w-44 md:w-52 p-6 rounded-[2.5rem] bg-[#ff4d20] shadow-[0_40px_80px_rgba(255,77,32,0.4)] hover:shadow-[0_50px_100px_rgba(255,77,32,0.6)] transition-all duration-700 z-30"
              style={{
                animation: 'float 8s ease-in-out infinite',
                animationDelay: '4s'
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[8px] font-black text-black/50 uppercase tracking-[0.3em]">Efficiency</span>
                <div className="w-7 h-7 rounded-xl bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors cursor-pointer border border-black/5">
                  <ChevronRight size={14} className="text-black/50" />
                </div>
              </div>
              
              {/* Dynamic Bar Chart */}
              <div className="h-16 flex items-end justify-center gap-1.5 mb-6 px-1.5">
                {[0.4, 0.65, 0.35, 0.85, 0.55, 0.75, 1.0, 0.65].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-black/20 rounded-full transition-all duration-[1.5s] hover:bg-black/40"
                    style={{ 
                      height: `${h * 100}%`,
                      transitionDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
              
              {/* User Bio Footer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/10 border-2 border-black/5 overflow-hidden shrink-0 shadow-lg">
                  <img src="https://i.pravatar.cc/150?u=samurai2" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-[10px] font-black text-black uppercase tracking-tight truncate">Tensei 天聖</p>
                  <p className="text-[9px] text-black/50 font-mono mt-0.5 font-bold">90% Energy</p>
                </div>
              </div>
            </div>

            {/* Floating Background Accents */}
            <div className="absolute -left-[10%] bottom-[20%] w-24 h-24 rounded-full border border-white/[0.05] flex items-center justify-center opacity-40 z-0">
              <div className="w-16 h-16 rounded-full border border-white/[0.08] flex items-center justify-center relative animate-[spin_30s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
            </div>
            
            <div className="absolute -right-5 -top-10 w-32 h-32 bg-purple-500/[0.02] rounded-full blur-[80px] pointer-events-none" />

          </div>
        </ScrollReveal>

        {/* Brand Showcase Footer */}
        <ScrollReveal delay={1.0} className="mt-16 flex flex-col items-center gap-6 group/brand">
          <div className="flex items-center gap-4 opacity-30 group-hover:opacity-60 transition-opacity duration-1000">
             <div className="h-px w-12 bg-gradient-to-r from-transparent to-white" />
             <h4 className="samurai-pixel text-3xl md:text-4xl font-bold select-none tracking-[0.6em]">SAMUR.AI</h4>
             <div className="h-px w-12 bg-gradient-to-l from-transparent to-white" />
          </div>
          
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 rounded-full bg-white/5 animate-pulse border border-white/5"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BentoShowcase;
