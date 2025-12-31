"use client";

import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import type { PersonalInfo } from "@/db/schema";
import { LucideIcon } from "lucide-react";

interface SocialIconsProps {
  socialLinks?: PersonalInfo["socialLinks"];
  size?: number;
  className?: string;
  iconClassName?: string;
  variant?: "default" | "compact" | "minimal";
}

const SocialIcons = ({
  socialLinks,
  size = 24,
  className = "",
  iconClassName = "",
  variant = "default",
}: SocialIconsProps) => {
  // Social icons mapping
  const socialIcons: Record<string, LucideIcon> = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
    twitter: Twitter,
  };

  // Colors for each social network
  const socialColors: Record<string, string> = {
    github: "hover:text-foreground",
    linkedin: "hover:text-blue-400",
    instagram: "hover:text-pink-400",
    twitter: "hover:text-blue-400",
  };

  // Base styles by variant
  const variantStyles = {
    default: "p-3 rounded-xl bg-secondary/50 border border-border/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]",
    compact: "p-2.5 rounded-lg bg-secondary/40 border border-border/40 text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/40 hover:bg-secondary/60 hover:scale-110 hover:-translate-y-1",
    minimal: "p-2 rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110",
  };

  // Create array of social links based on database data
  const links = socialLinks
    ? Object.entries(socialLinks)
        .filter(([_, url]) => url)
        .map(([platform, url]) => ({
          name: platform.charAt(0).toUpperCase() + platform.slice(1),
          icon: socialIcons[platform] || Github,
          href: url as string,
          color: socialColors[platform] || "hover:text-foreground",
        }))
    : [];

  if (links.length === 0) return null;

  return (
    <div className={className || "flex items-center gap-3"}>
      {links.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${variantStyles[variant]} ${social.color} ${iconClassName}`}
            aria-label={social.name}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;

