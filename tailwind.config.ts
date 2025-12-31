// Tailwind CSS 4.1 uses configuration via @theme in CSS
// This file is no longer necessary, but kept for compatibility
// Configuration is in app/globals.css using @theme

import type { Config } from "tailwindcss";

export default {
  // Content paths - Tailwind 4.1 detects automatically, but kept for compatibility
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;
