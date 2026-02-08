
"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0, 
  direction = "up",
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });

    const { current } = domRef;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate(0, 0) scale(1)";
    switch (direction) {
      case "up": return "translateY(30px) scale(1)";
      case "down": return "translateY(-30px) scale(1)";
      case "left": return "translateX(30px) scale(1)";
      case "right": return "translateX(-30px) scale(1)";
      case "scale": return "translateY(0) scale(0.95)";
      default: return "translateY(30px) scale(1)";
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
      }}
      className={className}
    >
      {children}
    </div>
  );
};
