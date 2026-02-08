"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Award, Code } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProjectsGrid from "./ProjectsGrid";
import CertificatesGrid from "./CertificatesGrid";
import TechnologiesGrid from "./TechnologiesGrid";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const PortfolioSection = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("projetos");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["projetos", "certificados", "tecnologias"].includes(tab)) {
      setActiveTab(tab);

      // Scroll to portfolio section after a short delay to ensure tab content is rendered
      setTimeout(() => {
        const portfolioSection = document.getElementById("portfolio");
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [searchParams]);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Briefcase size={20} />
              <span className="text-sm font-medium uppercase tracking-wider">Portfólio</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Meus </span>
              <span className="text-gradient">Trabalhos</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore meus projetos, certificações e as tecnologias que domino para criar
              soluções digitais de qualidade.
            </p>
          </ScrollReveal>
        </div>

        {/* Tabs */}
        <ScrollReveal delay={0.4}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-secondary/50 backdrop-blur-sm border border-border/50 p-1 rounded-xl">
              <TabsTrigger
                value="projetos"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground rounded-lg transition-all duration-500 hover:scale-105"
              >
                <Briefcase size={16} className="mr-2" />
                Projetos
              </TabsTrigger>
              <TabsTrigger
                value="certificados"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground rounded-lg transition-all duration-500 hover:scale-105"
              >
                <Award size={16} className="mr-2" />
                Certificados
              </TabsTrigger>
              <TabsTrigger
                value="tecnologias"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground rounded-lg transition-all duration-500 hover:scale-105"
              >
                <Code size={16} className="mr-2" />
                Tecnologias
              </TabsTrigger>
            </TabsList>

            <TabsContent value="projetos" className="animate-fade-in" id="projetos">
              <ProjectsGrid />
            </TabsContent>

            <TabsContent value="certificados" className="animate-fade-in">
              <CertificatesGrid />
            </TabsContent>

            <TabsContent value="tecnologias" className="animate-fade-in">
              <TechnologiesGrid />
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PortfolioSection;

