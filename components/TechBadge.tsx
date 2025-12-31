import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getIconDefinition, IconRenderer } from "@/components/Icons";

// Technology colors and icons mapping
// Cores representativas de cada tecnologia
export const techConfig: Record<string, { color: string; bgColor: string; borderColor: string; icon: string }> = {
  // Languages
  "JavaScript": { color: "text-yellow-300", bgColor: "bg-yellow-500/20", borderColor: "border-yellow-500/40", icon: "JS" },
  "TypeScript": { color: "text-blue-300", bgColor: "bg-blue-600/20", borderColor: "border-blue-500/40", icon: "TS" },
  
  // Frontend Frameworks
  "Reactjs": { color: "text-cyan-300", bgColor: "bg-cyan-500/20", borderColor: "border-cyan-400/40", icon: "/icons/react.svg" },
  "Vuejs": { color: "text-emerald-300", bgColor: "bg-emerald-600/20", borderColor: "border-emerald-500/40", icon: "/icons/vuejs.svg" },
  "Nextjs": { color: "text-white", bgColor: "bg-black/30", borderColor: "border-gray-700/50", icon: "/icons/next.svg" },
  
  // Backend
  "Nodejs": { color: "text-green-300", bgColor: "bg-green-600/20", borderColor: "border-green-500/40", icon: "/icons/nodejs.svg" },
  
  // Styling
  "Tailwindcss": { color: "text-cyan-300", bgColor: "bg-cyan-600/20", borderColor: "border-cyan-500/40", icon: "/icons/tailwind.svg" },
  "CSS": { color: "text-pink-300", bgColor: "bg-pink-600/20", borderColor: "border-pink-500/40", icon: "/icons/css.svg" },
  
  // Databases
  "PostgreSQL": { color: "text-blue-300", bgColor: "bg-blue-700/20", borderColor: "border-blue-600/40", icon: "🐘" },
  "Supabase": { color: "text-emerald-300", bgColor: "bg-emerald-600/20", borderColor: "border-emerald-500/40", icon: "⚡" },
  
  // ORMs
  "Prisma": { color: "text-indigo-300", bgColor: "bg-indigo-600/20", borderColor: "border-indigo-500/40", icon: "P" },
  "Drizzle": { color: "text-lime-300", bgColor: "bg-lime-600/20", borderColor: "border-lime-500/40", icon: "/icons/drizzle.svg" },
  
  // Deploy & Hosting
  "Vercel": { color: "text-white", bgColor: "bg-black/30", borderColor: "border-gray-700/50", icon: "▲" },
  "Neon": { color: "text-purple-300", bgColor: "bg-purple-600/20", borderColor: "border-purple-500/40", icon: "💜" },
  "Railway": { color: "text-white", bgColor: "bg-gray-800/30", borderColor: "border-gray-600/50", icon: "/icons/railway.svg" },
  
  
  // Payment & Auth
  "Stripe": { color: "text-indigo-300", bgColor: "bg-indigo-700/20", borderColor: "border-indigo-600/40", icon: "/icons/stripe.svg" },
  "BetterAuth": { color: "text-gray-300", bgColor: "bg-gray-800/30", borderColor: "border-gray-600/50", icon: "/icons/betterauth.svg" },
  
  // UI Libraries
  "Lucide": { color: "text-red-300", bgColor: "bg-red-600/20", borderColor: "border-red-500/40", icon: "/icons/lucide.svg" },
  "Shadcn": { color: "text-slate-300", bgColor: "bg-slate-700/20", borderColor: "border-slate-600/40", icon: "/icons/shadcn.svg" },
  
  // AI
  "GeminiAI": { color: "text-purple-200", bgColor: "bg-purple-600/25", borderColor: "border-purple-400/60", icon: "/icons/gemini.svg" },
};

// Default config for unknown technologies
const defaultConfig = { 
  color: "text-primary",
  bgColor: "bg-primary/10",
  borderColor: "border-primary/30",
  icon: "•"
};

interface TechBadgeProps {
  tech: string;
  size?: "sm" | "md" | "lg";
}

const TechBadge = ({ tech, size = "sm" }: TechBadgeProps) => {
  const config = techConfig[tech] || defaultConfig;
  const iconDefinition = getIconDefinition(tech);
  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        config.color,
        config.bgColor,
        config.borderColor,
        sizeClasses[size],
        "font-medium border transition-all duration-300 hover:scale-105"
      )}
    >
      <span className="mr-1.5 flex items-center">
        {iconDefinition ? (
          <IconRenderer icon={iconDefinition} className="w-4 h-4" />
        ) : (
          config.icon
        )}
      </span>
      {tech}
    </Badge>
  );
};

export default TechBadge;
