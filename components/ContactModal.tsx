"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, MessageCircle } from "lucide-react";
import SocialIcons from "@/components/SocialIcons";
import type { PersonalInfo } from "@/db/schema";

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
    fetchPersonalInfo();
  }, []);

  // Function to format phone number for WhatsApp
  const formatWhatsAppNumber = (phone: string | null | undefined): string | null => {
    if (!phone) return null;
    // Remove spaces, parentheses, hyphens and other characters
    const cleaned = phone.replace(/[\s()\-]/g, "");
    // Ensure it starts with country code (if not, add +55)
    const formatted = cleaned.startsWith("+") ? cleaned : `+55${cleaned}`;
    return `https://wa.me/${formatted.replace("+", "")}`;
  };

  const whatsappUrl = formatWhatsAppNumber(personalInfo?.phone);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-strong border-border/50 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient text-center">
            Vamos conversar!
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <p className="text-center text-muted-foreground">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
          </p>

          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          ) : (
            <>
              {/* Social Links */}
              <SocialIcons 
                socialLinks={personalInfo?.socialLinks} 
                size={24}
                variant="default"
                className="flex justify-center gap-4"
              />

              {/* Contact Info */}
              <div className="space-y-3">

                {personalInfo?.phone && (
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/30 transition-all duration-300 hover:bg-secondary/50 hover:border-primary/30"
                  >
                    <Phone size={20} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{personalInfo.phone}</span>
                  </a>
                )}

                {personalInfo?.email && (
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/30 transition-all duration-300 hover:bg-secondary/50 hover:border-primary/30"
                  >
                    <Mail size={20} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{personalInfo.email}</span>
                  </a>
                )}

                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 transition-all duration-300 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 hover:scale-105"
                  >
                    <MessageCircle size={20} className="text-[#25D366]" />
                    <span className="text-sm font-medium text-foreground">Entrar em contato pelo WhatsApp</span>
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
