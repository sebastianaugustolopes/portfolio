"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const TechIcon = memo(({ children, delay = 0, x = 0, y = 0 }) => (
  <motion.div
    className="absolute"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, -12, 0],
      x: [0, 6, 0],
      rotate: [0, 3, -3, 0],
    }}
    transition={{
      opacity: { duration: 0.6, delay },
      scale: { duration: 0.6, delay },
      y: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: delay + 1,
      },
      x: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: delay + 1.5,
      },
      rotate: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: delay + 2,
      },
    }}
  >
    {children}
  </motion.div>
));

const FloatingTechIcons = memo(() => {
  return (
    <div className="absolute -top-8 -left-8 w-48 h-48 pointer-events-none z-10">
      {/* JavaScript */}
      <TechIcon delay={0} x={15} y={20}>
        <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-xl">
          <img src="/javascript.svg" alt="JavaScript" className="w-10 h-10" />
        </div>
      </TechIcon>

      {/* React */}
      <TechIcon delay={0.2} x={65} y={8}>
        <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center shadow-xl">
          <img src="/Next.js.svg" alt="Next.js" className="w-10 h-10" />
        </div>
      </TechIcon>

      {/* Vue.js */}
      <TechIcon delay={0.4} x={35} y={55}>
        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-xl">
          <img src="/vue-js.svg" alt="Vue.js" className="w-10 h-10" />
        </div>
      </TechIcon>

      {/* Next.js */}
      <TechIcon delay={0.6} x={85} y={35}>
        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-xl">
          <img src="/react-native.svg" alt="React.js" className="w-10 h-10" />
        </div>
      </TechIcon>

      {/* Tailwind CSS */}
      <TechIcon delay={0.8} x={20} y={90}>
        <div className="w-12 h-12 bg-pink-300 rounded-xl flex items-center justify-center shadow-xl">
          <img src="/tailwindcss.svg" alt="Tailwind CSS" className="w-10 h-10" />
        </div>
      </TechIcon>

      {/* Vite */}
      <TechIcon delay={1} x={70} y={70}>
        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-xl">
          <img src="/vite.svg" alt="Vite" className="w-10 h-10" />
        </div>
      </TechIcon>
    </div>
  );
});

FloatingTechIcons.displayName = "FloatingTechIcons";
TechIcon.displayName = "TechIcon";

export default FloatingTechIcons;
