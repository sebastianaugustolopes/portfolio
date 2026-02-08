import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getIconDefinition, IconRenderer } from "@/components/Icons";

// Technology colors and icons mapping with modern, elegant styling
export const techConfig: Record<string, {
  color: string;
  bgColor: string;
  borderColor: string;
  glowColor: string;
  icon: string
}> = {
  // Languages
  "JavaScript": {
    color: "text-yellow-400",
    bgColor: "bg-black/40",
    borderColor: "border-yellow-500/40",
    glowColor: "shadow-yellow-500/20",
    icon: "/icons/javascript.svg"
  },
  "TypeScript": {
    color: "text-blue-400",
    bgColor: "bg-black/40",
    borderColor: "border-blue-500/40",
    glowColor: "shadow-blue-500/20",
    icon: "/icons/typescript.svg"
  },

  // Frontend Frameworks
  "Reactjs": {
    color: "text-cyan-400",
    bgColor: "bg-black/40",
    borderColor: "border-cyan-400/40",
    glowColor: "shadow-cyan-400/20",
    icon: "/icons/react.svg"
  },
  "Vuejs": {
    color: "text-emerald-400",
    bgColor: "bg-black/40",
    borderColor: "border-emerald-500/40",
    glowColor: "shadow-emerald-500/20",
    icon: "/icons/vuejs.svg"
  },
  "Nextjs": {
    color: "text-gray-100",
    bgColor: "bg-black/40",
    borderColor: "border-gray-600/40",
    glowColor: "shadow-gray-700/20",
    icon: "/icons/next.svg"
  },

  // Backend
  "Nodejs": {
    color: "text-green-400",
    bgColor: "bg-black/40",
    borderColor: "border-green-500/40",
    glowColor: "shadow-green-500/20",
    icon: "/icons/nodejs.svg"
  },
  "Redux": {
    color: "text-purple-400",
    bgColor: "bg-black/40",
    borderColor: "border-purple-500/40",
    glowColor: "shadow-purple-500/20",
    icon: "/icons/redux.svg"
  },
  "Zod": {
    color: "text-cyan-400",
    bgColor: "bg-black/40",
    borderColor: "border-cyan-500/40",
    glowColor: "shadow-cyan-500/20",
    icon: "/icons/zod.svg"
  },
  "Express": {
    color: "text-white-400", 
    bgColor: "bg-black/40",
    borderColor: "border-whitez-500/40",
    glowColor: "shadow-cyan-500/20",
    icon: "/icons/expressjs.svg"
  },

  // Styling
  "Tailwindcss": {
    color: "text-cyan-400",
    bgColor: "bg-black/40",
    borderColor: "border-cyan-500/40",
    glowColor: "shadow-cyan-500/20",
    icon: "/icons/tailwind.svg"
  },
  "CSS": {
    color: "text-pink-400",
    bgColor: "bg-black/40",
    borderColor: "border-pink-500/40",
    glowColor: "shadow-pink-500/20",
    icon: "/icons/css.svg"
  },
  "Angular": {
    color: "text-red-400",
    bgColor: "bg-black/40",
    borderColor: "border-red-500/40",
    glowColor: "shadow-red-500/20",
    icon: "/icons/angular.svg"
  },

  // Databases
  "PostgreSQL": {
    color: "text-blue-400",
    bgColor: "bg-black/40",
    borderColor: "border-blue-600/40",
    glowColor: "shadow-blue-600/20",
    icon: "/icons/postgresql.svg"
  },
  "Supabase": {
    color: "text-emerald-400",
    bgColor: "bg-black/40",
    borderColor: "border-emerald-500/40",
    glowColor: "shadow-emerald-500/20",
    icon: "/icons/supabase.svg"
  },

  // ORMs
  "Prisma": {
    color: "text-indigo-400",
    bgColor: "bg-black/40",
    borderColor: "border-indigo-500/40",
    glowColor: "shadow-indigo-500/20",
    icon: "/icons/prisma.svg"
  },
  "Drizzle": {
    color: "text-lime-400",
    bgColor: "bg-black/40",
    borderColor: "border-lime-500/40",
    glowColor: "shadow-lime-500/20",
    icon: "/icons/drizzle.svg"
  },

  // Deploy & Hosting
  "Vercel": {
    color: "text-gray-100",
    bgColor: "bg-black/40",
    borderColor: "border-gray-600/40",
    glowColor: "shadow-gray-700/20",
    icon: "/icons/vercel.svg"
  },
  "Neon": {
    color: "text-purple-400",
    bgColor: "bg-black/40",
    borderColor: "border-purple-500/40",
    glowColor: "shadow-purple-500/20",
    icon: "/icons/neon.svg"
  },
  "Railway": {
    color: "text-gray-100",
    bgColor: "bg-black/40",
    borderColor: "border-gray-600/40",
    glowColor: "shadow-gray-600/20",
    icon: "/icons/railway.svg"
  },

  // Payment & Auth
  "Stripe": {
    color: "text-indigo-400",
    bgColor: "bg-black/40",
    borderColor: "border-indigo-600/40",
    glowColor: "shadow-indigo-600/20",
    icon: "/icons/stripe.svg"
  },
  "BetterAuth": {
    color: "text-gray-300",
    bgColor: "bg-black/40",
    borderColor: "border-gray-600/40",
    glowColor: "shadow-gray-600/20",
    icon: "/icons/betterauth.svg"
  },

  // UI Libraries
  "Lucide": {
    color: "text-red-400",
    bgColor: "bg-black/40",
    borderColor: "border-red-500/40",
    glowColor: "shadow-red-500/20",
    icon: "/icons/lucide.svg"
  },
  "Shadcn": {
    color: "text-slate-300",
    bgColor: "bg-black/40",
    borderColor: "border-slate-600/40",
    glowColor: "shadow-slate-600/20",
    icon: "/icons/shadcn.svg"
  },

  // AI
  "GeminiAI": {
    color: "text-purple-300",
    bgColor: "bg-black/40",
    borderColor: "border-purple-400/40",
    glowColor: "shadow-purple-400/25",
    icon: "/icons/gemini.svg"
  },
};

// Default config for unknown technologies
const defaultConfig = {
  color: "text-slate-300",
  bgColor: "bg-black/40",
  borderColor: "border-slate-600/40",
  glowColor: "shadow-slate-600/15",
  icon: "/icons/default.svg"
};

interface TechBadgeProps {
  tech: string;
  size?: "sm" | "md" | "lg";
}

const TechBadge = ({ tech, size = "sm" }: TechBadgeProps) => {
  const config = techConfig[tech] || defaultConfig;
  const iconDefinition = getIconDefinition(tech);

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2.5",
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        // Base styles
        "relative overflow-hidden backdrop-blur-sm",
        "font-semibold tracking-wide",
        "border-[1.5px]",
        "transition-all duration-300 ease-out",

        // Colors
        config.color,
        config.bgColor,
        config.borderColor,

        // Size
        sizeClasses[size],
        "flex items-center justify-center",

        // Hover effects
        "hover:scale-105 hover:shadow-lg",
        `hover:${config.glowColor}`,
        "hover:border-opacity-60",
        "hover:brightness-110",

        // Modern touch
        "rounded-lg",
        "select-none cursor-default"
      )}
    >
      {/* Subtle shine effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -skew-x-12" />

      {/* Icon */}
      <span className={cn("flex items-center justify-center shrink-0", iconSizes[size])}>
        {iconDefinition ? (
          <IconRenderer icon={iconDefinition} className={iconSizes[size]} />
        ) : (
          config.icon.startsWith("/") || config.icon.startsWith("http") ? (
            <img src={config.icon} alt={tech} className={iconSizes[size]} />
          ) : (
            <span className="flex items-center justify-center">{config.icon}</span>
          )
        )}
      </span>

      {/* Text */}
      <span className="relative z-10 whitespace-nowrap">{tech}</span>
    </Badge>
  );
};

export default TechBadge;