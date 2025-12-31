"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import type { PersonalInfo } from "@/db/schema";

const AboutSection = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    async function fetchPersonalInfo() {
      try {
        const res = await fetch("/api/personal-info");
        const data = await res.json();
        setPersonalInfo(data);
      } catch (error) {
        console.error("Error fetching personal info:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPersonalInfo();
  }, []);

  if (loading || !personalInfo) {
    return <div className="py-24">Loading...</div>;
  }

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-glow-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <ScrollReveal delay={0.1} direction="left">
              <div className="inline-flex items-center gap-2 text-primary">
                <User size={20} />
                <span className="text-sm font-medium uppercase tracking-wider">Sobre mim</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="left">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-foreground">Olá, eu sou o </span>
                <span className="text-gradient">{personalInfo.name.split(" ")[0]}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="left">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Atuo no desenvolvimento de interfaces modernas e responsivas com React, Next.js, TypeScript e Tailwind CSS, aplicando boas práticas de componentização, otimização de performance e consistência visual. Em paralelo, trabalho no back-end com a construção de APIs REST utilizando Node.js, Express e NestJS, adotando princípios de arquitetura de software, injeção de dependência, segurança e organização de código.
                </p>
                <p>
                  Tenho experiência na modelagem e persistência de dados em bancos relacionais e não relacionais, como PostgreSQL e MongoDB, utilizando ORMs como Prisma e Drizzle para garantir integridade, eficiência e clareza na camada de dados. Possuo familiaridade tanto com arquiteturas monolíticas quanto com microsserviços, compreendendo os trade-offs técnicos de cada abordagem e aplicando-as de acordo com o contexto do sistema.
                </p>
                <p>
                  Além disso, atuo com versionamento de código por meio de Git e GitHub, seguindo boas práticas como Conventional Commits, e participo de ciclos completos de deploy e monitoramento de aplicações em ambientes cloud. Complemento minha atuação com conhecimentos em UX/UI e Web Design, utilizando o Figma para estruturar interfaces acessíveis, coerentes e alinhadas ao comportamento do usuário.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="left">
              <Button 
                variant="gradient" 
                size="lg" 
                className="group hover:scale-105 transition-transform"
                onClick={() => setIsCVModalOpen(true)}
              >
                <Download size={18} className="mr-2 group-hover:animate-bounce" />
                Visualizar CV
              </Button>
            </ScrollReveal>
          </div>

          {/* Image/Visual */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="relative flex justify-center">
              <div className="relative w-[400px] md:w-[550px] h-[680px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Banner Image */}
                <Image 
                  src="/banner.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
                
                {/* Dark overlay on top and bottom */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black/60" />
                
                {/* Absolute black fog mask - only center visible */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, transparent 25%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 80%, rgba(0,0,0,1) 100%)'
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* CV Modal */}
      <Dialog open={isCVModalOpen} onOpenChange={setIsCVModalOpen}>
        <DialogContent className="glass-strong border-border/50 max-w-6xl w-full h-[90vh] p-0 flex flex-col">
              
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-gradient">
                Currículo
              </DialogTitle>
              <div className="flex items-center gap-3">
                <a
                  href="/documents/sebastian_augusto_cv_docx.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Download size={18} />
                  Download PDF
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCVModalOpen(false)}
                  className="rounded-lg"
                >
                  <X size={20} />
                </Button>
              </div>
            </div>
          </DialogHeader>
          
          <div className="flex-1 overflow-hidden p-6">
            <iframe
              src="/documents/sebastian_augusto_cv_docx.pdf"
              className="w-full h-full rounded-lg border border-border/50"
              title="CV Preview"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutSection;

