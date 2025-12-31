import { Card, CardContent } from "@/components/ui/card";
import { techConfig } from "@/components/TechBadge";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { getIconDefinition, IconRenderer } from "@/components/Icons";

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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {technologies.map((tech, index) => {
        const iconDefinition = getIconDefinition(tech.name);
        const config = techConfig[tech.name] || { 
          color: iconDefinition?.textColor || iconDefinition?.floating?.textColor || "text-primary", 
          bgColor: iconDefinition?.bgColor || iconDefinition?.floating?.bgColor || "bg-primary/10", 
          borderColor: iconDefinition?.floating?.borderColor || "border-primary/30", 
          icon: "•" 
        };

        return (
          <ScrollReveal key={tech.name} delay={index * 0.05} direction="scale">
            <Card 
              variant="glass"
              className={cn(
                "group transition-all duration-500 hover:-translate-y-2",
                "hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]",
                config.borderColor,
                "hover:border-opacity-60"
              )}
            >
              <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                <div 
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold",
                    "transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                    config.bgColor,
                    config.color
                  )}
                >
                  {iconDefinition ? (
                    <IconRenderer icon={iconDefinition} className="w-8 h-8" />
                  ) : (
                    config.icon
                  )}
                </div>
                <h3 className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  config.color
                )}>
                  {tech.name}
                </h3>
                <span className="text-xs text-muted-foreground">{tech.category}</span>
              </CardContent>
            </Card>
          </ScrollReveal>
        );
      })}
    </div>
  );
};

export default TechnologiesGrid;
