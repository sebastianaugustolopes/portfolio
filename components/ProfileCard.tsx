"use client";

import React, { useEffect, useState } from "react";
import { BadgeCheck, Globe, Star } from "lucide-react";
import DevTerminal from "./DevTerminal";
import type { PersonalInfo } from "@/db/schema";

const ProfileCard = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPersonalInfo() {
      try {
        const res = await fetch("/api/personal-info");
        if (res.ok) {
          const data = await res.json();
          setPersonalInfo(data);
        }
      } catch (error) {
        console.error("Error fetching personal info:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPersonalInfo();
  }, []);

  if (loading || !personalInfo) {
    return (
      <div className="relative w-[340px] md:w-[400px] h-[500px] glass-panel rounded-[42px] bg-white/5 animate-pulse flex items-center justify-center">
        <span className="text-white/20 text-xs font-mono">LOADING...</span>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="absolute -inset-10 bg-gradient-to-tr from-purple-600/10 via-indigo-500/5 to-blue-400/10 rounded-full blur-[100px] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="relative w-[340px] md:w-[400px] glass-panel rounded-[42px] overflow-hidden border-white/10 shadow-2xl transition-all duration-700 group-hover:translate-y-[-10px] group-hover:shadow-purple-500/10">
        <div className="relative h-[280px] w-full overflow-hidden">
          <img
            src={personalInfo.profilePhoto || "https://avatars.githubusercontent.com/u/93351418"}
            alt={personalInfo.name}
            className="w-full h-full object-cover object-top grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Available</span>
            </div>
            <button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors">
              <Star size={18} />
            </button>
          </div>
        </div>

        <div className="px-8 pb-10 -mt-8 relative z-10">
          <div className="space-y-6">
            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{personalInfo.name}</h3>
                  <BadgeCheck className="text-blue-400 fill-blue-400/10" size={20} />
                </div>
                <div className="flex items-center gap-2 text-white/40 font-mono text-[10px] uppercase tracking-widest">
                  <Globe size={12} />
                  <span>{personalInfo.location || "Brazil"}</span>
                </div>
              </div>
            </div>

            <div className="relative group/terminal">
              <div className="absolute -inset-2 bg-purple-500/5 blur-xl rounded-2xl opacity-0 group-hover/terminal:opacity-100 transition-opacity" />
              <DevTerminal name={personalInfo.name} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </div>
    </div>
  );
};

export default ProfileCard;

