
"use client";

import React, { useEffect, useState } from "react";
import { ExternalLink, Github, ArrowRight, Layers, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import TechBadge from "./TechBadge";
import { ScrollReveal } from "./ScrollReveal";

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  projectDate?: string;
}

const formatDate = (dateString?: string) => {
  if (!dateString) return "Em breve";
  const [year, month] = dateString.split("-");
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  return `${months[parseInt(month) - 1]} ${year}`;
};

const ProjectsGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="aspect-[16/11] rounded-[40px] bg-white/5 border border-white/5 animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="projects-section" className="grid md:grid-cols-2 gap-10">
      {projects.map((project, index) => (
        <ScrollReveal key={project.id} delay={index * 0.1} direction="up">
          <div className="group relative">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Main Project Card */}
            <div className="relative glass-panel rounded-[42px] overflow-hidden border-white/5 shadow-2xl transition-all duration-500 group-hover:translate-y-[-12px] group-hover:border-white/10">

              {/* Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-8xl font-black text-white/5 uppercase select-none">
                    {project.title.charAt(0)}
                  </div>
                )}

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6 backdrop-blur-sm">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-black/40 border border-white/20 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all backdrop-blur-md"
                    >
                      <Github size={24} />
                    </a>
                  )}
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-6 right-6">
                  <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white/60 uppercase tracking-widest flex items-center gap-2">
                    <Layers size={12} className="text-purple-400" />
                    <span>{formatDate(project.projectDate)}</span>
                  </div>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-10 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-black text-white tracking-tighter uppercase group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <Sparkles size={16} className="text-purple-500/40 group-hover:animate-pulse" />
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed line-clamp-2 italic">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2.5">
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} tech={tech} size="sm" />
                  ))}
                </div>

                {/* Primary Action */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-neutral-900 bg-neutral-800" />
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-neutral-900 bg-purple-600 flex items-center justify-center text-[8px] font-bold text-white">+5</div>
                  </div>

                  <a href={`/projeto/${project.id}`} className="group/btn inline-flex items-center gap-3 text-[10px] font-black text-white uppercase tracking-[0.3em] hover:text-purple-400 transition-colors">
                    Explorar Case
                    <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Interaction Stripe */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ProjectsGrid;
