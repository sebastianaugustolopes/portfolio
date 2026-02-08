
"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Code2, Rocket, Zap, MousePointer2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

interface Project {
  id: string;
  image?: string;
}

const Landing: React.FC = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to fetch projects", err));
  }, []);

  const navigateToSection = (tab: 'projetos' | 'tecnologias') => {
    router.push(`/home?tab=${tab}#portfolio`);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="grid-pattern-elegant absolute inset-0 opacity-20" />
        <div className="noise-texture absolute inset-0" />

        {/* Cinematic Lighting */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 blur-[1px] animate-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>

      <Navbar />

      <main className="relative z-20 pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">

              <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
                <Badge variant="glow" className="mb-6 gap-2 py-1.5 px-4 backdrop-blur-md bg-white/5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  <span className="tracking-wide uppercase text-[10px] font-bold text-white/80">Disponível para novos projetos</span>
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
                FULL STACK <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">PORTFOLIO </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-transparent blur-sm rounded-full opacity-50" />
                </span> <br />
                DEVELOPER
              </h1>

              <p className="text-md text-white/50 max-w-xl leading-relaxed mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
                Projetos full stack focados na criação de aplicações web estruturadas e funcionais. Aplicações que refletem a aplicação de conceitos fundamentais de programação, integração entre front-end e back-end, manipulação de dados e o uso de boas práticas no desenvolvimento Web/Software.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
                <Button variant="hero" size="lg" className="group" onClick={() => router.push('/home')}>
                  <span>Explorar Projetos</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button variant="glass" size="lg" className="group border-white/5" onClick={() => navigateToSection('tecnologias')}>
                  <Code2 className="mr-2 text-purple-400" size={20} />
                  <span>Stack Técnica</span>
                </Button>
              </div>

              {/* Tech Indicators */}
              <div className="mt-16 flex flex-wrap gap-8 items-center animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">2+</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Anos de Experiência</span>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">{projects.length}+</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Projetos</span>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div className="flex -space-x-3">
                  {projects.slice(0, 4).map((project, i) => (
                    <div key={project.id} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-neutral-800 overflow-hidden ring-2 ring-white/5">
                      {project.image ? (
                        <img src={project.image} alt="Project" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-[8px] text-white/20">
                          {project.id}
                        </div>
                      )}
                    </div>
                  ))}
                  {projects.length > 4 && (
                    <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-purple-600 flex items-center justify-center text-[10px] font-bold ring-2 ring-white/5">
                      +{projects.length - 4}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Visual (Interactive Terminal/Card) */}
            <div className="lg:col-span-5 relative hidden lg:block animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
              <div className="relative group">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[32px] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />

                {/* Main Card */}
                <div className="relative glass-panel rounded-3xl p-8 overflow-hidden shadow-2xl border-white/10">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                    <div className="ml-auto flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                      <Layers size={12} />
                      System Architect
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                        <Zap size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1">Desenvolvimento Full Stack</h3>
                        <p className="text-sm text-white/40">
                          Desenvolvimento de aplicações web escaláveis com JavaScript e TypeScript, utilizando React, Next.js e Vite. Integração com back-end por meio de APIs REST, ORMs (Prisma, Drizzle) e PostgreSQL, aplicando boas práticas de segurança, versionamento com Git/GitHub e deploy em cloud.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                        <MousePointer2 size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1">Arquitetura e Organização de Sistemas</h3>
                        <p className="text-sm text-white/40">
                          Experiência com arquiteturas monolíticas e baseadas em microsserviços, compreendendo a separação de responsabilidades, padrões de escalabilidade, segurança de dados e estabilidade das aplicações.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400">
                        <Rocket size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1">Web Design e Experiência do Usuário</h3>
                        <p className="text-sm text-white/40">
                          Conhecimento em UX/UI, Visual Design e Arquitetura da Informação, com uso do Figma para criação de interfaces responsivas e intuitivas, priorizando hierarquia visual, usabilidade e consistência da experiência do usuário.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
