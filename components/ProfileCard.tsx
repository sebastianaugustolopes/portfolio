"use client";

import { useEffect, useState } from "react";
import { BadgeCheck, User, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PersonalInfo } from "@/db/schema";
import { getFloatingIcons, IconRenderer } from "@/components/Icons";

const ProfileCard = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPersonalInfo() {
      try {
        const res = await fetch("/api/personal-info");
        const data = await res.json();
        setPersonalInfo(data);
      } catch (error) {
        console.error("Error fetching personal info:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPersonalInfo();
  }, []);

  // Get floating icons from centralized component
    const floatingIcons = getFloatingIcons(["Tailwindcss", "Reactjs", "Vuejs", "Vite", "Neon", "Drizzle"]);

  if (loading || !personalInfo) {
    return (
      <div className="relative w-[340px] md:w-[380px]">
        <div className="relative rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm border border-border/40 shadow-2xl h-96 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="relative w-[340px] md:w-[380px] mt-10 lg:mt-0">
      {/* Floating Icons - Grouped with subtle overlaps */}
      <div className="absolute -top-4 -left-2 w-64 h-32 z-20">
        {floatingIcons.map((icon, index) => {
          if (!icon.floating) return null;
          
          return (
            <div
              key={icon.name}
              className={`absolute ${icon.floating.position} animate-float ${icon.floating.rotate}`}
              style={{ 
                animationDelay: `${icon.floating.delay}s`, 
                animationDuration: `${5 + index * 0.3}s`,
                zIndex: icon.floating.zIndex
              }}
            >
              <div 
                className={`w-10 h-10 rounded-xl ${icon.floating.bgColor} ${icon.floating.textColor} ${icon.floating.borderColor ? `border ${icon.floating.borderColor}` : ''} flex items-center justify-center text-sm font-bold shadow-xl transition-all duration-300 hover:scale-125 hover:z-[70] hover:shadow-2xl p-2`}
              >
                <IconRenderer 
                  icon={icon}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Card */}
      <div className="relative rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm border border-border/40 shadow-2xl">
        {/* Profile Image - Large */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/95" />
          <img 
            src={personalInfo.profilePhoto || "/perfil-photo.jpg"}
            alt={personalInfo.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Name with verification */}
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">{personalInfo.name}</h3>
            <BadgeCheck className="text-primary" size={18} />
          </div>

          {/* Bio */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            "Desenvolvedor Full Stack Júnior | JavaScript Ecosystem & Software Architecture"
          </p>

          {/* Info Row */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <User size={14} className="text-primary/70" />
              <span>{personalInfo.age} anos</span>
            </div>
            {personalInfo.location && (
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <GraduationCap size={14} className="text-primary/70" />
                <span>{personalInfo.location.split(",")[0]}</span>
              </div>
            )}
          </div>

          {/* Follow Button */}
          {personalInfo.socialLinks.linkedin && (
            <a 
              href={personalInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="gradient" size="sm" className="mt-2 text-sm px-6 w-full">
                Seguir +
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

