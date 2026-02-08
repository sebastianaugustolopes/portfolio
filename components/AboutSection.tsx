
"use client";

import React, { useEffect, useState } from "react";
// Added 'X' to imports from lucide-react to fix missing reference error
import { Download, User, CheckCircle2, ChevronRight, FileText, Code, Cpu, Globe, Rocket, X } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollReveal } from "./ScrollReveal";
import { DocumentFolder } from "./DocumentFolder";

const AboutSection = () => {
  const [personalInfo, setPersonalInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [experienceTime, setExperienceTime] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    async function fetchPersonalInfo() {
      try {
        const res = await fetch("/api/personal-info");
        if (res.ok) {
          const data = await res.json();
          setPersonalInfo(data);
        }
      } catch (error) {
        console.error("Error fetching personal info:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPersonalInfo();
  }, []);

  // Calcular tempo de experiência desde 07/03/2024
  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date('2024-03-07');
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();

      if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      setExperienceTime({ years, months, days });
    };

    calculateExperience();
    const interval = setInterval(calculateExperience, 1000 * 60 * 60); // Atualiza a cada hora

    return () => clearInterval(interval);
  }, []);

  const focusAreas = [
    { icon: Code, title: "Tecnologias Modernas", desc: "Aplicação consciente de ferramentas atuais com foco em produtividade, manutenção de código e evolução contínua." },
    { icon: Cpu, title: "Performance", desc: "Atenção à eficiência das aplicações desde a estrutura do código,considerando renderização e gerenciamento de estado." },
    { icon: Globe, title: "Segurança", desc: "Preocupação constante com a segurança das aplicações, abordando validações, controle de acesso e proteção de dados." },
    { icon: Rocket, title: "UX Design", desc: "Construção de interfaces pensadas para o usuário, equilibrando estética, clareza e usabilidade." },
  ];

  if (loading || !personalInfo) {
    return <div className="py-24 text-center text-white/20 font-mono text-sm tracking-widest animate-pulse">LOADING_PROFILE...</div>;
  }

  return (
    <section id="sobre" className="py-32 md:py-48 relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none opacity-30" />

      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 grid-pattern-elegant opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-20 items-center">

          {/* Visual Column - Col Span 5 */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <ScrollReveal delay={0.2} direction="scale">
              <div className="relative group">
                {/* Multi-layered Decorative Frames */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 rounded-[48px] blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />

                {/* Main Image Container */}
                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/5 shadow-2xl bg-neutral-900">
                  <img
                    src="banner.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />

                  {/* Cinematic Masking and Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

                  {/* Floating Content Inside Image */}
                  <div className="absolute bottom-10 left-10 right-10 space-y-4">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white/80 uppercase tracking-widest">FullStack</span>
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-500/20 text-[10px] font-bold text-purple-300 uppercase tracking-widest">Junior</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white tracking-tighter uppercase">EST. 2024</h4>
                      <p className="text-white/40 text-xs font-mono">Desenvolvendo soluções <br /> um commit de cada vez.</p>
                    </div>
                  </div>
                </div>

                {/* Exterior Floating Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-panel rounded-3xl border-white/10 flex items-center justify-center animate-float hidden md:flex">
                  <div className="text-center">
                    <div className="text-2xl font-black text-white leading-none">
                      {experienceTime.years > 0 && `${experienceTime.years}A `}
                      {experienceTime.months}M
                    </div>
                    <div className="text-[8px] text-white/40 uppercase tracking-widest mt-1 font-bold">EXPERIÊNCIA</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Actions Moved Here */}
            <ScrollReveal delay={0.4} className="mt-8 space-y-6">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <FileText size={24} />
                </div>
                <div className="text-left">
                  <h3 className="tracking-tight text-xl font-bold text-white">Currículo Profissional</h3>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">PDF Document • Sebastian Augusto</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <Button
                  variant="hero"
                  size="lg"
                  className="group px-10 h-16 rounded-2xl shadow-purple-500/10 w-full sm:w-auto"
                  onClick={() => setIsCVModalOpen(true)}
                >
                  <FileText size={20} className="mr-3" />
                  <span>Visualizar Currículo</span>
                  <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-white/10" />
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Disponível para contratação</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Text Content - Col Span 7 */}
          <div className="lg:col-span-7 space-y-12 order-1 lg:order-2">
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Arquivo Sobre</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter">
                  ENGENHARIA <br />
                  <span className="bg-gradient-to-r from-white via-white to-white/30 bg-clip-text text-transparent">QUE TRANSFORMA</span> <br />
                  O <span className="italic font-light text-purple-400">POSSÍVEL.</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="space-y-6 text-white/40 text-lg leading-relaxed max-w-2xl">
                  <p>
                    Atuo no desenvolvimento de interfaces modernas e responsivas com <span className="text-white">React, Next.js, TypeScript e Tailwind CSS</span>, aplicando boas práticas de componentização, otimização de performance e consistência visual. Em paralelo, trabalho no back-end com a construção de APIs REST utilizando <span className="text-white">Node.js, Express e NestJS</span>, adotando princípios de arquitetura de software, injeção de dependência, segurança e organização de código.
                  </p>
                  <p>
                    Tenho experiência na modelagem e persistência de dados em bancos relacionais e não relacionais, como <span className="text-white">PostgreSQL e MongoDB</span>, utilizando ORMs como Prisma e Drizzle para garantir integridade, eficiência e clareza na camada de dados. Possuo familiaridade tanto com arquiteturas monolíticas quanto com microsserviços, compreendendo os trade-offs técnicos de cada abordagem.
                  </p>
                  <p>
                    Além disso, atuo com versionamento de código por meio de Git e GitHub, seguindo boas práticas como Conventional Commits, e participo de ciclos completos de deploy e monitoramento de aplicações em ambientes cloud. Complemento minha atuação com conhecimentos em <span className="text-purple-400 font-medium">UX/UI e Web Design</span>, utilizando o Figma para estruturar interfaces acessíveis, coerentes e alinhadas ao comportamento do usuário.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Focus Mini-Grid */}
            <ScrollReveal delay={0.6} className="grid sm:grid-cols-2 gap-6">
              {focusAreas.map((area, i) => (
                <div key={i} className="group p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-purple-400 group-hover:scale-110 transition-all mb-4">
                    <area.icon size={20} />
                  </div>
                  <h5 className="text-white font-bold mb-1 uppercase tracking-tight text-sm">{area.title}</h5>
                  <p className="text-white/30 text-xs leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </ScrollReveal>

          </div>
        </div>
        
        {/* Todo: Add DocumentFolder component here */}
        
      </div>

      {/* CV Modal - Using the simplified Dialog */}
      <Dialog open={isCVModalOpen} onOpenChange={setIsCVModalOpen}>
        

        <DialogContent className="bg-neutral-900/50 p-0">
          <div className="w-full h-full flex flex-col">
            {/* PDF Viewer */}
            <iframe
              src="/documents/sebastian_augusto_cv.docx.pdf"
              className="w-full flex-1 min-h-[60vh] rounded-lg"
              title="Currículo Sebastian Augusto"
            />


          </div>
        </DialogContent>
      </Dialog>

    </section>
  );
};

export default AboutSection;
