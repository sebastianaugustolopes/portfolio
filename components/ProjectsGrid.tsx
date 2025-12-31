"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TechBadge from "@/components/TechBadge";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { convertGoogleDriveUrl } from "@/lib/utils";
import type { Project } from "@/db/schema";

const ProjectsGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
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
      <div className="grid md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-64 bg-secondary/30 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ScrollReveal key={project.id} delay={index * 0.1} direction="up">
          <Card 
            variant="glow" 
            className="overflow-hidden group hover:scale-[1.02] transition-all duration-500"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-secondary">
              {project.image ? (
                <>
                  <Image
                    src={convertGoogleDriveUrl(project.image) || project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                {!project.image && (
                  <span className="text-4xl font-bold text-muted-foreground/30 group-hover:scale-110 transition-transform duration-500">
                    {project.title.charAt(0)}
                  </span>
                )}
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 z-10">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-primary text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary border border-border hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>

            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={tech} tech={tech} size="sm" />
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="gradient" size="sm" className="w-full hover:scale-105 transition-transform">
                      <ExternalLink size={14} className="mr-2" />
                      Live Demo
                    </Button>
                  </a>
                )}
                <Link href={`/projeto/${project.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full group/btn hover:scale-105 transition-transform">
                    Ver projeto
                    <ArrowRight size={14} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ProjectsGrid;

