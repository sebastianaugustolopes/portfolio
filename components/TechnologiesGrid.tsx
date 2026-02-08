
"use client";

import React from "react";
import { getIconDefinition, IconRenderer } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";
import { Sparkles } from "lucide-react";

const technologies = [
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Reactjs", category: "Frontend" },
  { name: "Vuejs", category: "Frontend" },
  { name: "Nextjs", category: "Framework" },
  { name: "Vite", category: "Build Tool" },
  { name: "Nodejs", category: "Backend" },
  { name: "Tailwindcss", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "BaaS" },
  { name: "Drizzle", category: "ORM" },
  { name: "Vercel", category: "Deploy" },
  { name: "Railway", category: "Deploy" },
  { name: "Neon", category: "Database" },
];

const TechnologiesGrid = () => {
  return (
    <div id="tech-section" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {technologies.map((tech, index) => {
        const iconDef = getIconDefinition(tech.name);

        return (
          <ScrollReveal key={tech.name} delay={index * 0.05} direction="scale">
            <div className="group relative">
              {/* Subtle Outer Glow */}
              <div className={`absolute -inset-1 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${iconDef?.bgColor || 'bg-purple-500/10'}`} />

              {/* Card Container */}
              <div className="relative glass-panel rounded-[28px] p-6 flex flex-col items-center text-center space-y-4 border-white/5 group-hover:border-white/20 transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden">

                {/* Decorative Pattern inside Card */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon Section */}
                <div
                  className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center 
                    transition-all duration-700 group-hover:scale-110 group-hover:rotate-3
                    border border-white/5 group-hover:border-white/10
                    ${iconDef?.bgColor || 'bg-white/5'}
                  `}
                >
                  {iconDef ? (
                    <IconRenderer icon={iconDef} className="w-9 h-9 transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <span className="text-white/20 font-black text-2xl uppercase tracking-tighter">
                      {tech.name.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <h3 className={`text-sm font-black uppercase tracking-tighter transition-colors duration-300 ${iconDef?.textColor || 'text-white/80'}`}>
                    {tech.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/60">
                      {tech.category}
                    </span>
                    {index % 3 === 0 && (
                      <Sparkles size={10} className="text-purple-400" />
                    )}
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-50 transition-transform duration-700 ${iconDef?.bgColor?.replace('/10', '/40') || 'bg-purple-500/40'}`} />
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
};

export default TechnologiesGrid;
