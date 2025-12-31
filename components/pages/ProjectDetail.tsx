"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import TechBadge from "@/components/TechBadge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { convertGoogleDriveUrl } from "@/lib/utils";
import type { Project } from "@/db/schema";

interface ProjectDetailProps {
  id: string;
}

const ProjectDetail = ({ id }: ProjectDetailProps) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (res.status === 404) {
          setNotFound(true);
          return;
        }
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }
    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando projeto...</p>
        </div>
      </div>
    );
  }

  if (notFound || !project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center relative">
        <div className="grid-pattern-uniform" />
        <div className="text-center relative z-10">
          <h1 className="text-4xl font-bold text-foreground mb-4">Projeto não encontrado</h1>
          <Link href="/home">
            <Button variant="gradient">Voltar ao Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Uniform grid background */}
      <div className="grid-pattern-uniform" />
      
      <Navbar />

      <main className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <ScrollReveal delay={0.1}>
            <Link href="/home#portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 mb-8 group hover:translate-x-1">
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              Voltar ao Portfólio
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Image */}
            <ScrollReveal delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-secondary aspect-video hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_50px_hsl(var(--primary)/0.2)]">
                {project.image ? (
                  <>
                    <Image
                      src={convertGoogleDriveUrl(project.image) || project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl font-bold text-muted-foreground/20 hover:scale-110 transition-transform duration-500">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </ScrollReveal>

            {/* Project Info */}
            <div className="space-y-6">
              <ScrollReveal delay={0.3} direction="right">
                <h1 className="text-4xl md:text-5xl font-bold text-gradient">
                  {project.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.4} direction="right">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </ScrollReveal>

              {/* Technologies */}
              <ScrollReveal delay={0.5} direction="right">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <TechBadge key={tech} tech={tech} size="lg" />
                  ))}
                </div>
              </ScrollReveal>

              {/* Action buttons */}
              <ScrollReveal delay={0.6} direction="right">
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="gradient" size="lg" className="hover:scale-105 transition-transform">
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                        <Github size={18} className="mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <ScrollReveal delay={0.7}>
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Key Features
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.keyFeatures.map((feature, index) => (
                    <ScrollReveal key={index} delay={0.1 * index} direction="up">
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/30 transition-all duration-500 hover:border-primary/30 hover:bg-secondary/50 hover:scale-105 hover:-translate-y-1">
                        <CheckCircle className="text-primary shrink-0" size={20} />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

