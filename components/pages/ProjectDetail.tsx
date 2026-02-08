
"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Cpu,
  Globe,
  Zap,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { Button } from "../ui/button";
import TechBadge from "../TechBadge";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { ScrollReveal } from "../ScrollReveal";

// Mock removed, using real data

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  keyFeatures?: string[];
  projectDate?: string;
  concept?: string;
  challenge?: string;
  impact?: string;
}

interface ProjectDetailProps {
  id: string;
}

const formatDate = (dateString?: string) => {
  if (!dateString) return "Em breve";
  const [year, month] = dateString.split("-");
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  return `${months[parseInt(month) - 1]} ${year}`;
};

const ProjectDetail = ({ id }: ProjectDetailProps) => {
  const [project, setProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch current project
        const res = await fetch(`/api/projects/${id}`);
        if (res.ok) {
          const data = await res.json();
          setProject(data);
        } else {
          console.error("Project not found");
          setNotFound(true);
          return;
        }

        // Fetch all projects to find next one
        const allRes = await fetch("/api/projects");
        if (allRes.ok) {
          const allProjects: Project[] = await allRes.json();
          const currentIndex = allProjects.findIndex(p => String(p.id) === String(id));
          if (currentIndex !== -1 && currentIndex < allProjects.length - 1) {
            setNextProject(allProjects[currentIndex + 1]);
          } else if (allProjects.length > 0) {
            // Loop back to first project if at the end
            setNextProject(allProjects[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020202] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
            <div className="absolute inset-2 rounded-full border-2 border-blue-500/20 border-b-blue-500 animate-spin-reverse" />
          </div>
          <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em] animate-pulse">Initializing_Vault...</p>
        </div>
      </div>
    );
  }

  if (notFound || !project) {
    return (
      <div className="min-h-screen bg-[#020202] flex items-center justify-center relative overflow-hidden">
        <div className="grid-pattern-elegant absolute inset-0 opacity-10" />
        <div className="text-center relative z-10 px-6">
          <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 text-white/20">
            <Layers size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Objeto não <br /><span className="text-white/20">Encontrado</span></h1>
          <a href="/">
            <Button variant="hero" className="rounded-2xl px-10">Voltar à Base</Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="grid-pattern-elegant absolute inset-0 opacity-[0.15]" />
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-gradient-to-b from-purple-900/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* Header Navigation */}
          <ScrollReveal delay={0.1} direction="right">
            <a
              href="/#projects-section"
              className="inline-flex items-center gap-3 text-white/40 hover:text-white transition-all duration-500 mb-12 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Sair da Visualização</span>
            </a>
          </ScrollReveal>

          {/* Project Hero Section */}
          <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">

            {/* Project Details Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <ScrollReveal delay={0.2}>
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-black text-purple-400 uppercase tracking-widest">
                      Projeto para estudo
                    </div>
                    <div className="h-px w-12 bg-white/10" />
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{formatDate(project.projectDate)}</span>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <h1 className="text-5xl md:text-7xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-4">
                    {project.title.split(' ')[0]} <br />
                    <span className="text-white/20 italic font-light">{project.title.split(' ').slice(1).join(' ')}</span>
                  </h1>
                </ScrollReveal>


              </div>

              {/* Action Stack */}
              <ScrollReveal delay={0.5} className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" size="lg" className="rounded-2xl group px-10">
                      <ExternalLink size={18} className="mr-3 group-hover:rotate-12 transition-transform" />
                      Projeto Online
                    </Button>
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="glass" size="lg" className="rounded-2xl border-white/10 px-8">
                      <Github size={18} className="mr-3" />
                      Código Fonte
                    </Button>
                  </a>
                )}
              </ScrollReveal>

              {/* Architecture Section */}
              <ScrollReveal delay={0.6} className="space-y-8 pt-8 border-t border-white/5">
                <h3 className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em] flex items-center gap-4">
                  Tech Architecture <div className="h-px flex-1 bg-white/5" />
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Visual Preview Column */}
            <div className="lg:col-span-7 relative">
              <ScrollReveal delay={0.4} direction="scale">
                <div className="relative group">
                  {/* Decorative Glows */}
                  <div className="absolute -inset-10 bg-purple-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  {/* Main Frame */}
                  <div className="relative glass-panel rounded-[40px] overflow-hidden border-white/10 shadow-2xl p-4">
                    <div className="absolute inset-x-0 top-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                    </div>
                    <div className="mt-10 aspect-[16/10] rounded-[24px] overflow-hidden bg-neutral-900 border border-white/5">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-8xl font-black text-white/5 uppercase">
                          {project.title.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floating Stat Card */}
                  <div className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-3xl border-white/10 shadow-2xl hidden md:block group-hover:translate-y-[-10px] transition-transform duration-700">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <Zap size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Performance Score</p>
                        <p className="text-2xl font-black text-white">100/100</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-lg text-white/40 m-8 mb-20 italic border-l-2 border-purple-500/30 pl-6">
              {project.description}
            </p>
          </ScrollReveal>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-32">
            <ScrollReveal delay={0.1} className="space-y-4">
              <div className="flex items-center gap-3 text-purple-400">
                <Sparkles size={20} />
                <h4 className="font-bold uppercase tracking-tight">O Conceito</h4>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                {project.concept || "Conceito do projeto não disponível."}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <Cpu size={20} />
                <h4 className="font-bold uppercase tracking-tight">O Desafio</h4>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                {project.challenge || "Desafio do projeto não disponível."}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-400">
                <ShieldCheck size={20} />
                <h4 className="font-bold uppercase tracking-tight">O Impacto</h4>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                {project.impact || "Impacto do projeto não disponível."}
              </p>
            </ScrollReveal>
          </div>

          {/* Features Showcase */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-16">
              <ScrollReveal className="text-center space-y-4">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Funcionalidades <span className="text-white/20">de Elite.</span></h2>
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
              </ScrollReveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.keyFeatures.map((feature, index) => (
                  <ScrollReveal key={index} delay={index * 0.1} direction="up">
                    <div className="group p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-500">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-all mb-6 border border-white/5">
                        <CheckCircle2 size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{feature}</h3>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* Next Project Teaser */}
          {nextProject && (
            <ScrollReveal delay={0.5} className="mt-48">
              <a href={`/projeto/${nextProject.id}`} className="block">
                <div className="relative glass-panel p-12 md:p-20 rounded-[48px] overflow-hidden group/next cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover/next:opacity-100 transition-opacity duration-1000" />
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="space-y-4 text-center md:text-left">
                      <span className="text-[10px] font-black text-purple-400 uppercase tracking-[0.4em]">Próximo Projeto</span>
                      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">{nextProject.title}</h2>
                    </div>
                    <Button variant="hero" className="rounded-full w-20 h-20 p-0 flex items-center justify-center group-hover/next:scale-110 transition-transform">
                      <ChevronRight size={40} />
                    </Button>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
