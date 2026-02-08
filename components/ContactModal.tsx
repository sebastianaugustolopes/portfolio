"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, MessageCircle, Sparkles, ExternalLink, Send } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";
import type { PersonalInfo } from "@/db/schema";
import { Badge } from "@/components/ui/badge";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
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
    if (isOpen) {
      fetchPersonalInfo();
    }
  }, [isOpen]);

  // Function to format phone number for WhatsApp
  const formatWhatsAppNumber = (phone: string | null | undefined): string | null => {
    if (!phone) return null;
    const cleaned = phone.replace(/[\s()\-]/g, "");
    const formatted = cleaned.startsWith("+") ? cleaned : `+55${cleaned}`;
    return `https://wa.me/${formatted.replace("+", "")}`;
  };

  const whatsappUrl = formatWhatsAppNumber(personalInfo?.phone);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-strong border-white/10 max-w-lg p-0 overflow-hidden sm:rounded-3xl">

        {/* Decorative Ambience */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative p-6 sm:p-8">
          <DialogHeader className="mb-8 relative">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 shadow-glow animate-float-elegant">
              <Sparkles size={28} className="text-purple-400" />
            </div>

            <DialogTitle className="text-3xl md:text-4xl font-bold text-center mb-3">
              <span className="text-gradient-animated">Vamos Conversar?</span>
            </DialogTitle>

            <p className="text-center text-white/50 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
              Tem uma ideia incrível? Estou sempre aberto a novos projetos e parcerias.
            </p>
          </DialogHeader>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-500 border-r-2 border-transparent" />
              <span className="text-xs text-white/30 animate-pulse">Carregando contatos...</span>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="grid gap-4">
                {/* Whatsapp Card - Featured */}
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/20 transition-all duration-300 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#25D366]/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366] group-hover:scale-110 transition-transform">
                      <MessageCircle size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white/90 group-hover:text-[#25D366] transition-colors">WhatsApp</h4>
                      <p className="text-xs text-white/50">Resposta rápida</p>
                    </div>
                    <ExternalLink size={16} className="text-white/30 group-hover:text-[#25D366] transition-colors" />
                  </a>
                )}

                {/* Email Card */}
                {personalInfo?.email && (
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-purple-500/30 hover:-translate-y-1"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                      <Mail size={22} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white/90 group-hover:text-purple-300 transition-colors">Email</h4>
                      <p className="text-xs text-white/50 break-all">{personalInfo.email}</p>
                    </div>
                    <Send size={16} className="text-white/30 group-hover:text-purple-400 transition-colors" />
                  </a>
                )}

                {/* Phone Card - Optional */}
                {personalInfo?.phone && (
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 hover:-translate-y-1"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                      <Phone size={22} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white/90 group-hover:text-blue-300 transition-colors">Telefone</h4>
                      <p className="text-xs text-white/50">{personalInfo.phone}</p>
                    </div>
                  </a>
                )}
              </div>

              {/* Footer Section */}
              <div className="pt-6 border-t border-white/5">
                <div className="flex flex-col items-center gap-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-white/30">
                    Minhas Redes
                  </span>
                  <div className="bg-white/5 p-2 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <SocialIcons
                      socialLinks={personalInfo?.socialLinks}
                      size={20}
                      className="flex items-center justify-center gap-4 text-white/60 hover:text-white"
                      variant="ghost"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
