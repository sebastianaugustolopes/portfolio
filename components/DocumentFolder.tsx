"use client";

import React, { useState } from "react";
import { Folder, FileText, Calendar, Layers, CheckCircle2, Circle, Clock, MoreVertical } from "lucide-react";
import { TimelineModal } from "./TimelineModal";

interface DocumentFolderProps {
  title: string;
  subtitle: string;
  date: string;
  count: string;
  image?: string;
}

export const DocumentFolder: React.FC<DocumentFolderProps> = ({
  title,
  subtitle,
  date,
  count,
  image = "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=800&auto=format&fit=crop"
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="group relative w-full max-w-[320px] aspect-[4/3] cursor-pointer transition-all duration-500 hover:scale-[1.05]"
      >
        {/* Dynamic Background Glow */}
        <div className="absolute -inset-6 bg-purple-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* The Digital Folder Structure */}
        <div className="relative h-full w-full select-none">
          
          {/* Back Part of the Folder (The Tab) */}
          <div 
            className="absolute top-0 left-0 w-24 h-8 bg-neutral-800 rounded-t-xl border-t border-x border-white/10"
            style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0% 100%)' }}
          />

          {/* Back Panel (The taller part) */}
          <div className="absolute top-4 inset-x-0 bottom-0 bg-neutral-800 rounded-tr-3xl rounded-b-3xl border border-white/5 shadow-2xl overflow-hidden">
             {/* Content peaking through */}
             <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700">
                <img src={image} className="w-full h-full object-cover" alt="bg" />
             </div>
          </div>

          {/* Front Panel (The Main "Folder" body) */}
          <div className="absolute top-10 inset-x-0 bottom-0 bg-neutral-900 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-500 group-hover:translate-y-2">
            
            {/* Header / Top bar of the front panel */}
            <div className="h-2 w-full bg-gradient-to-r from-purple-500/40 via-purple-500/20 to-transparent" />
            
            <div className="p-6 h-full flex flex-col justify-between">
              {/* Folder Label Area */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                      <Folder size={18} fill="currentColor" className="fill-purple-400/20" />
                    </div>
                    <h3 className="text-lg font-black text-white tracking-tight group-hover:text-purple-400 transition-colors">
                      {title}
                    </h3>
                  </div>
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em] ml-10">
                    {subtitle}
                  </p>
                </div>
                <MoreVertical size={16} className="text-white/10 group-hover:text-white/40 transition-colors" />
              </div>

              {/* Folder Meta Info */}
              <div className="flex items-end justify-between border-t border-white/5 pt-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-white/20 mb-1">
                    <Calendar size={12} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Modified</span>
                  </div>
                  <span className="text-lg font-black text-white leading-none">{date}</span>
                </div>

                <div className="flex flex-col items-end">
                   <div className="flex items-center gap-1.5 text-white/20 mb-1">
                    <Layers size={12} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Storage</span>
                  </div>
                  <span className="text-sm font-bold text-purple-500 group-hover:text-purple-400 transition-colors">
                    {count}
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle internal shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          </div>

          {/* Interaction status dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-500 border-2 border-black shadow-[0_0_15px_rgba(168,85,247,0.6)] animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <TimelineModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={title}
      />
    </>
  );
};