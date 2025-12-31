"use client";

import Icon from "./Icon";

// TYPES
export interface IconDefinition {
  name: string;
  svgPath: string;
  fallback: string;
  bgColor?: string;
  textColor?: string;
  floating?: {
    bgColor: string;
    textColor: string;
    borderColor?: string;
    position: string;
    zIndex: number;
    rotate: string;
    delay: number;
  };
}

// ICON DEFINITIONS - Organized by Category

export const iconDefinitions: Record<string, IconDefinition> = {
  // LANGUAGES
  JavaScript: {
    name: "JavaScript",
    svgPath: "/icons/javascript.svg",
    fallback: "JS",
    bgColor: "bg-yellow-500/20",
    textColor: "text-black",
    floating: {
      bgColor: "bg-yellow-400/90",
      textColor: "text-black",
      position: "top-0 left-0",
      zIndex: 50,
      rotate: "-rotate-6",
      delay: 0,
    },
  },
  TypeScript: {
    name: "TypeScript",
    svgPath: "/icons/typescript.svg",
    fallback: "TS",
    bgColor: "bg-blue-600/20",
    textColor: "text-white",
  },
  Python: {
    name: "Python",
    svgPath: "/icons/python.svg",
    fallback: "PY",
    bgColor: "bg-blue-700/20",
    textColor: "text-white",
  },
  HTML5: {
    name: "HTML5",
    svgPath: "/icons/html.svg",
    fallback: "HTML5",
    bgColor: "bg-orange-500/20",
    textColor: "text-white",
  },

  // FRONTEND FRAMEWORKS
  React: {
    name: "React",
    svgPath: "/icons/react.svg",
    fallback: "React",
    bgColor: "bg-cyan-500/20",
    textColor: "text-white",
    floating: {
      bgColor: "bg-cyan-500/90",
      textColor: "text-white",
      position: "top-0 left-20",
      zIndex: 55,
      rotate: "rotate-12",
      delay: 0.4,
    },
  },
  "React.js": {
    name: "React.js",
    svgPath: "/icons/react.svg",
    fallback: "Reactjs",
    bgColor: "bg-cyan-500/20",
    textColor: "text-white",
    floating: {
      bgColor: "bg-cyan-500/90",
      textColor: "text-white",
      position: "top-0 left-20",
      zIndex: 55,
      rotate: "rotate-12",
      delay: 0.4,
    },
  },
  Reactjs: {
    name: "React.js",
    svgPath: "/icons/react.svg",
    fallback: "Reactjs",
    bgColor: "bg-cyan-500/20",
    textColor: "text-white",
    floating: {
      bgColor: "bg-cyan-500/90",
      textColor: "text-white",
      position: "top-0 left-20",
      zIndex: 55,
      rotate: "rotate-12",
      delay: 0.4,
    },
  },
  "Next.js": {
    name: "Next.js",
    svgPath: "/icons/next.svg",
    fallback: "Nextjs",
    bgColor: "bg-black/30",
    textColor: "text-white",
    floating: {
      bgColor: "bg-black/90",
      textColor: "text-white",
      position: "-top-1 left-8",
      zIndex: 60,
      rotate: "rotate-12",
      delay: 0.2,
    },
  },
  Nextjs: {
    name: "Next.js",
    svgPath: "/icons/next.svg",
    fallback: "Nextjs",
    bgColor: "bg-black/30",
    textColor: "text-white",
    floating: {
      bgColor: "bg-black/90",
      textColor: "text-white",
      position: "-top-1 left-8",
      zIndex: 60,
      rotate: "rotate-12",
      delay: 0.2,
    },
  },
  "Vue.js": {
    name: "Vue.js",
    svgPath: "/icons/vuejs.svg",
    fallback: "Vuejs",
    bgColor: "bg-emerald-600/20",
    textColor: "text-white",
    floating: {
      bgColor: "bg-emerald-600/90",
      textColor: "text-white",
      position: "top-10 left-2",
      zIndex: 45,
      rotate: "rotate-6",
      delay: 0.1,
    },
  },
  Vuejs: {
    name: "Vue.js",
    svgPath: "/icons/vuejs.svg",
    fallback: "Vuejs",
    bgColor: "bg-emerald-600/20",
    textColor: "text-white",
    floating: {
      bgColor: "bg-emerald-600/90",
      textColor: "text-white",
      position: "top-10 left-2",
      zIndex: 45,
      rotate: "rotate-6",
      delay: 0.1,
    },
  },
  Vite: {
    name: "Vite",
    svgPath: "/icons/vite.svg",
    fallback: "Vite",
    bgColor: "bg-purple-500/20",
    textColor: "text-white",
    floating: {
      bgColor: "bg-white/90",
      textColor: "text-white",
      position: "top-8 left-12",
      zIndex: 65,
      rotate: "-rotate-12",
      delay: 0.3,
    },
  },

  // BACKEND
  Nodejs: {
    name: "Node.js",
    svgPath: "/icons/nodejs.svg",
    fallback: "Nodejs",
    bgColor: "bg-green-600/20",
    textColor: "text-white",
  },

  // STYLING
  Tailwindcss: {
    name: "Tailwind",
    svgPath: "/icons/tailwindcss.svg",
    fallback: "Tailwind",
    bgColor: "bg-cyan-600/20",
    textColor: "text-white",
    floating: {
      bgColor: "bg-black/90",
      textColor: "text-cyan-400",
      position: "top-0 left-0",
      zIndex: 50,
      rotate: "-rotate-6",
      delay: 0,
    },
  },
  CSS3: {
    name: "CSS3",
    svgPath: "/icons/css.svg",
    fallback: "CSS3",
    bgColor: "bg-blue-500/20",
    textColor: "text-white",
  },

  // DATABASES
  PostgreSQL: {
    name: "PostgreSQL",
    svgPath: "/icons/postgresql.svg",
    fallback: "PostgreSQL",
    bgColor: "bg-blue-700/20",
    textColor: "text-white",
    floating: {
      bgColor: "bg-blue-700/90",
      textColor: "text-white",
      position: "top-14 left-20",
      zIndex: 40,
      rotate: "-rotate-3",
      delay: 0.5,
    },
  },
  Supabase: {
    name: "Supabase",
    svgPath: "/icons/supabase.svg",
    fallback: "Supabase",
    bgColor: "bg-emerald-600/20",
    textColor: "text-white",
  },
  Neon: {
    name: "Neon",
    svgPath: "/icons/neon.svg",
    fallback: "Neon",
    bgColor: "bg-purple-600/20",
    textColor: "text-white",
    floating: {
      bgColor: "bg-purple-600/90",
      textColor: "text-white",
      position: "top-14 left-20",
      zIndex: 40,
      rotate: "-rotate-3",
      delay: 0.5,
    },
  },

  // ORMs
  Prisma: {
    name: "Prisma",
    svgPath: "/icons/prisma.svg",
    fallback: "P",
    bgColor: "bg-indigo-600/20",
    textColor: "text-white",
  },
  Drizzle: {
    name: "Drizzle",
    svgPath: "/icons/drizzle.svg",
    fallback: "Drizzle ORM",
    bgColor: "bg-lime-600/20",
    textColor: "text-white",
    floating: {
      bgColor: "bg-lime-600/90",
      textColor: "text-white",
      position: "top-2 left-10",
      zIndex: 60,
      rotate: "rotate-3",
      delay: 0.2,
    },
  },

  // PAYMENT & AUTHENTICATION
  Stripe: {
    name: "Stripe",
    svgPath: "/icons/stripe.svg",
    fallback: "Stripe",
    bgColor: "bg-indigo-700/20",
    textColor: "text-white",
  },
  BetterAuth: {
    name: "BetterAuth",
    svgPath: "/icons/betterauth.svg",
    fallback: "BetterAuth",
    bgColor: "bg-gray-900/30",
    textColor: "text-white",
  },

  // UI LIBRARIES
  Lucide: {
    name: "Lucide",
    svgPath: "/icons/lucide.svg",
    fallback: "Lucide",
    bgColor: "bg-red-600/20",
    textColor: "text-white",
  },
  Shadcn: {
    name: "Shadcn",
    svgPath: "/icons/shadcn.svg",
    fallback: "Shadcn",
    bgColor: "bg-slate-800/30",
    textColor: "text-white",
  },

  // DEPLOY & HOSTING
  Vercel: {
    name: "Vercel",
    svgPath: "/icons/vercel.svg",
    fallback: "Vercel",
    bgColor: "bg-black/30",
    textColor: "text-white",
  },
  Railway: {
    name: "Railway",
    svgPath: "/icons/railway.svg",
    fallback: "Railway",
    bgColor: "bg-gray-800/30",
    textColor: "text-white",
  },

  // AI & MACHINE LEARNING
  GeminiAI: {
    name: "GeminiAI",
    svgPath: "/icons/gemini.svg",
    fallback: "GeminiAI",
    bgColor: "bg-purple-600/25",
    textColor: "text-white",
  },
};

// HELPER FUNCTIONS

/**
 * Get the definition of an icon by name
 * @param name - Exact name of the icon
 * @returns Icon definition or null if not found
 */
export const getIconDefinition = (name: string): IconDefinition | null => {
  return iconDefinitions[name] || null;
};

/**
 * Get a list of icons by names
 * @param names - Array of icon names
 * @returns Array of icon definitions found
 */
export const getIconsByNames = (names: string[]): IconDefinition[] => {
  return names
    .map((name) => getIconDefinition(name))
    .filter((icon): icon is IconDefinition => icon !== null);
};

/**
 * Get all available icons
 * @returns Array with all icon definitions
 */
export const getAllIcons = (): IconDefinition[] => {
  return Object.values(iconDefinitions);
};

/**
 * Get only icons with floating configuration
 * @param names - Optional: array of names to filter
 * @returns Array of icons with floating configuration
 */
export const getFloatingIcons = (names?: string[]): IconDefinition[] => {
  const icons = names ? getIconsByNames(names) : getAllIcons();
  return icons.filter((icon) => icon.floating !== undefined);
};

// COMPONENTS

interface IconRendererProps {
  icon: IconDefinition;
  className?: string;
  size?: number;
}

/**
 * Component to render a single icon
 */
export const IconRenderer = ({ icon, className = "", size }: IconRendererProps) => {
  if (!icon) {
    return null;
  }

  return (
    <Icon
      src={icon.svgPath}
      alt={icon.name}
      fallback={icon.fallback}
      className={className}
    />
  );
};

interface IconsListProps {
  icons?: string[];
  render?: (icon: IconDefinition) => React.ReactNode;
  className?: string;
}

/**
 * Component to render multiple icons
 */
export const IconsList = ({ icons, render, className = "" }: IconsListProps) => {
  const iconList = icons ? getIconsByNames(icons) : getAllIcons();

  if (render) {
    return <>{iconList.map((icon) => render(icon))}</>;
  }

  return (
    <div className={className}>
      {iconList.map((icon) => (
        <IconRenderer key={icon.name} icon={icon} />
      ))}
    </div>
  );
};

export default IconsList;
