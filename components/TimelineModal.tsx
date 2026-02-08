
"use client";

import React from "react";
import { X, CheckCircle2, Clock, Rocket, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const TimelineModal: React.FC<TimelineModalProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  const steps = [
    {
      id: 1,
      title: "Planejamento & Kickoff",
      date: "02 Dez, 2024",
      desc: "Definição de escopo, arquitetura de dados e prototipagem de alta fidelidade.",
      status: "complete",
      icon: Zap
    },
    {
      id: 2,
      title: "Desenvolvimento Ativo",
      date: "05 Dez, 2024",
      desc: "Implementação das camadas de serviço, integração de API e refinação de UI.",
      status: "current",
      icon: Clock
    },
    {
      id: 3,
      title: "Deployment & QA",
      date: "10 Dez, 2024",
      desc: "Testes unitários, otimização de performance e publicação em produção.",
      status: "upcoming",
      icon: Rocket
    }
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade-in" 
        onClick={onClose} 
      />
      
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl animate-fade-in">
        {/* Header do Modal */}
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">{title}</h2>
              <p className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase">Document Timeline Analysis</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-white/40 hover:text-white flex items-center justify-center transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Linha do Tempo */}
        <div className="p-10">
          <div className="relative space-y-12">
            {/* Linha Conectora Vertical */}
            <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500 via-purple-500/50 to-white/5" />

            {steps.map((step, idx) => (
              <div 
                key={step.id} 
                className="relative flex gap-8 group/item animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Ponto na Linha */}
                <div className={`
                  relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500
                  ${step.status === 'complete' ? 'bg-purple-500 text-white' : 
                    step.status === 'current' ? 'bg-purple-500/20 border border-purple-500/50 text-purple-400 animate-pulse' : 
                    'bg-neutral-800 border border-white/5 text-white/20'}
                `}>
                  <step.icon size={20} />
                </div>

                {/* Conteúdo do Passo */}
                <div className="flex-1 pb-4">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className={`font-bold tracking-tight uppercase ${step.status === 'upcoming' ? 'text-white/20' : 'text-white'}`}>
                      {step.title}
                    </h4>
                    <span className="text-[10px] font-mono font-bold text-white/20 bg-white/5 px-2 py-1 rounded">
                      {step.date}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${step.status === 'upcoming' ? 'text-white/10' : 'text-white/40'}`}>
                    {step.desc}
                  </p>
                  
                  {step.status === 'current' && (
                    <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-black text-purple-400 uppercase tracking-widest bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
                      Fase Atual
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer do Modal */}
        <div className="p-8 bg-white/20 border-t border-white/5 flex justify-end">
          <Button variant="hero" onClick={onClose} className="rounded-2xl px-10">
            Entendido
            <ChevronRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
