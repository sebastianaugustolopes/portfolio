"use client";

import Image from "next/image";

// Icon definition type
export interface IconDefinition {
  name: string;
  iconPath: string;
  textColor?: string;
  bgColor?: string;
}

// Map of technology names to their icon definitions
const iconRegistry: Record<string, IconDefinition> = {
  // Languages
  "JavaScript": { name: "JavaScript", iconPath: "/icons/javascript.svg", textColor: "text-yellow-300", bgColor: "bg-yellow-500/10" },
  "TypeScript": { name: "TypeScript", iconPath: "/icons/typescript.svg", textColor: "text-blue-400", bgColor: "bg-blue-500/10" },
  "Python": { name: "Python", iconPath: "/icons/python.svg", textColor: "text-yellow-400", bgColor: "bg-yellow-500/10" },
  "HTML5": { name: "HTML5", iconPath: "/icons/html.svg", textColor: "text-orange-400", bgColor: "bg-orange-500/10" },
  "CSS3": { name: "CSS3", iconPath: "/icons/css.svg", textColor: "text-blue-400", bgColor: "bg-blue-500/10" },
  "SCSS": { name: "SCSS", iconPath: "/icons/scss.svg", textColor: "text-pink-400", bgColor: "bg-pink-500/10" },

  // Frontend Frameworks
  "Reactjs": { name: "React", iconPath: "/icons/react.svg", textColor: "text-cyan-400", bgColor: "bg-cyan-500/10" },
  "React": { name: "React", iconPath: "/icons/react.svg", textColor: "text-cyan-400", bgColor: "bg-cyan-500/10" },
  "Vuejs": { name: "Vue.js", iconPath: "/icons/vuejs.svg", textColor: "text-emerald-400", bgColor: "bg-emerald-500/10" },
  "Vue.js": { name: "Vue.js", iconPath: "/icons/vuejs.svg", textColor: "text-emerald-400", bgColor: "bg-emerald-500/10" },
  "Nextjs": { name: "Next.js", iconPath: "/icons/next.svg", textColor: "text-white", bgColor: "bg-white/5" },
  "Next.js": { name: "Next.js", iconPath: "/icons/next.svg", textColor: "text-white", bgColor: "bg-white/5" },
  "Vite": { name: "Vite", iconPath: "/icons/vite.svg", textColor: "text-purple-400", bgColor: "bg-purple-500/10" },

  // Backend
  "Nodejs": { name: "Node.js", iconPath: "/icons/nodejs.svg", textColor: "text-green-400", bgColor: "bg-green-500/10" },
  "Node.js": { name: "Node.js", iconPath: "/icons/nodejs.svg", textColor: "text-green-400", bgColor: "bg-green-500/10" },
  "Zod": { name: "Zod", iconPath: "/icons/zod.svg", textColor: "text-blue-400", bgColor: "bg-blue-500/10" },
  "Express": { name: "Express.js", iconPath: "/icons/expressjs.svg", textColor: "text-gray-300", bgColor: "bg-gray-500/10" },

  // Styling
  "Tailwindcss": { name: "Tailwind CSS", iconPath: "/icons/tailwindcss.svg", textColor: "text-cyan-400", bgColor: "bg-cyan-500/10" },
  "Tailwind": { name: "Tailwind CSS", iconPath: "/icons/tailwindcss.svg", textColor: "text-cyan-400", bgColor: "bg-cyan-500/10" },
  "CSS": { name: "CSS", iconPath: "/icons/css.svg", textColor: "text-blue-400", bgColor: "bg-blue-500/10" },
  "Angular": { name: "Angular", iconPath: "/icons/angular.svg", textColor: "text-red-400", bgColor: "bg-red-500/10" },

  // Databases
  "PostgreSQL": { name: "PostgreSQL", iconPath: "/icons/postgresql.svg", textColor: "text-blue-300", bgColor: "bg-blue-600/10" },
  "Supabase": { name: "Supabase", iconPath: "/icons/supabase.svg", textColor: "text-emerald-400", bgColor: "bg-emerald-500/10" },
  "Neon": { name: "Neon", iconPath: "/icons/neon.svg", textColor: "text-green-400", bgColor: "bg-green-500/10" },

  // ORMs
  "Prisma": { name: "Prisma", iconPath: "/icons/prisma.svg", textColor: "text-indigo-300", bgColor: "bg-indigo-500/10" },
  "Drizzle": { name: "Drizzle", iconPath: "/icons/drizzle.svg", textColor: "text-lime-400", bgColor: "bg-lime-500/10" },

  // Deploy & Hosting
  "Vercel": { name: "Vercel", iconPath: "/icons/vercel.svg", textColor: "text-white", bgColor: "bg-white/5" },
  "Railway": { name: "Railway", iconPath: "/icons/railway.svg", textColor: "text-white", bgColor: "bg-white/5" },

  // Payment & Auth
  "Stripe": { name: "Stripe", iconPath: "/icons/stripe.svg", textColor: "text-indigo-400", bgColor: "bg-indigo-500/10" },
  "BetterAuth": { name: "BetterAuth", iconPath: "/icons/betterauth.svg", textColor: "text-gray-300", bgColor: "bg-gray-500/10" },

  // UI Libraries
  "Lucide": { name: "Lucide", iconPath: "/icons/lucide.svg", textColor: "text-red-400", bgColor: "bg-red-500/10" },
  "Shadcn": { name: "shadcn/ui", iconPath: "/icons/shadcn.svg", textColor: "text-slate-300", bgColor: "bg-slate-500/10" },
  "RadixUI": { name: "Radix UI", iconPath: "/icons/radixui.svg", textColor: "text-purple-400", bgColor: "bg-purple-500/10" },

  // AI
  "GeminiAI": { name: "Gemini AI", iconPath: "/icons/gemini.svg", textColor: "text-blue-400", bgColor: "bg-blue-500/10" },
  "Gemini": { name: "Gemini AI", iconPath: "/icons/gemini.svg", textColor: "text-blue-400", bgColor: "bg-blue-500/10" },
};

/**
 * Get icon definition by technology name
 */
export function getIconDefinition(name: string): IconDefinition | undefined {
  return iconRegistry[name];
}

/**
 * Get all icon definitions
 */
export function getAllIcons(): IconDefinition[] {
  return Object.values(iconRegistry);
}

// IconRenderer Props
interface IconRendererProps {
  icon: IconDefinition;
  size?: number;
  className?: string;
}

/**
 * Render an icon from the registry using Next.js Image
 */
export function IconRenderer({ icon, size = 24, className = "" }: IconRendererProps) {
  return (
    <Image
      src={icon.iconPath}
      alt={icon.name}
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}

// Simple Icon component for direct path usage
interface SimpleIconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: React.ReactNode;
}

export function TechIcon({ name, size = 24, className = "", fallback }: SimpleIconProps) {
  const iconDef = getIconDefinition(name);

  if (!iconDef) {
    return fallback ? <>{fallback}</> : null;
  }

  return <IconRenderer icon={iconDef} size={size} className={className} />;
}

export default TechIcon;
