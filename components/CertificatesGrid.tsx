"use client";

import React, { useEffect, useState } from "react";
import {
  Calendar,
  Award,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Tag
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface Certificate {
  id: string;
  name: string;
  institution: string;
  date: string;
  image?: string;
  verifyUrl?: string;
  description?: string;
  skills?: string[];
}

const CertificatesGrid: React.FC = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const res = await fetch("/api/certificates");
        if (res.ok) {
          const data = await res.json();
          setCertificates(data);
        }
      } catch (error) {
        console.error("Error fetching certificates:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCertificates();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="group relative">
            <div className="h-[600px] rounded-[2rem] bg-white/5 border border-white/10 animate-pulse overflow-hidden">
              <div className="h-56 bg-white/5" />
              <div className="p-6 space-y-4">
                <div className="h-6 w-3/4 bg-white/10 rounded-lg" />
                <div className="h-4 w-1/2 bg-white/5 rounded-lg" />
                <div className="h-16 w-full bg-white/5 rounded-lg" />
                <div className="pt-4 space-y-2">
                  <div className="h-10 w-full bg-white/5 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((cert, index) => (
        <ScrollReveal key={cert.id} delay={index * 0.1} direction="up">
          <div className="group relative h-full">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-[2.2rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000" />

            <div className="relative h-full glass-panel rounded-[2rem] overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 card-shadow flex flex-col">

              {/* Media Container */}
              <div className="relative h-56 overflow-hidden bg-neutral-900 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50" />

                {cert.image ? (
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Award size={80} className="text-white/5" />
                  </div>
                )}

                {/* Top Bar Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span className="text-[10px] font-bold text-white/90 uppercase tracking-tighter">Verified</span>
                  </div>
                </div>

                {/* Bottom Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

                {/* Institution Label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80">
                  <Globe size={14} className="text-blue-400" />
                  <span className="text-xs font-semibold tracking-wide">{cert.institution}</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex-1 p-6 space-y-4 flex flex-col">
                {/* Header */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-500">
                    {cert.name}
                  </h3>

                  <div className="flex items-center gap-2 text-white/40">
                    <Calendar size={14} />
                    <span className="text-xs font-medium font-mono uppercase tracking-widest">
                      {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                  {cert.description || "Demonstração de proficiência técnica e dedicação à excelência profissional."}
                </p>

                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-white/60 tracking-wider flex items-center gap-1"
                      >
                        <Tag size={10} className="text-white/40" />
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 4 && (
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-white/40 tracking-wider">
                        +{cert.skills.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* Spacer */}
                <div className="flex-1" />

                {/* Action Button */}
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group/btn py-3.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center gap-2 text-white/90 text-[11px] font-extrabold uppercase tracking-widest hover:from-blue-600 hover:to-indigo-600 hover:border-transparent transition-all duration-500"
                  >
                    <ShieldCheck size={16} className="text-indigo-400 group-hover/btn:text-white transition-colors" />
                    Verificar Credencial
                    <ExternalLink size={14} className="opacity-60 group-hover/btn:opacity-100 transition-all" />
                  </a>
                ) : (
                  <div className="w-full py-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center gap-2 text-white/40 text-[11px] font-extrabold uppercase tracking-widest">
                    <ShieldCheck size={16} />
                    Certificado Válido
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default CertificatesGrid;
