import { Send } from "lucide-react";
import VSCodeFileNav from "./VSCodeFileNav";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Dark blurred background */}
      <div className="absolute inset-0  backdrop-blur-xl" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[180px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/8 rounded-full blur-[150px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Send size={20} />
              <span className="text-sm font-medium uppercase tracking-wider">Contato</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Vamos </span>
              <span className="text-gradient">Conversar?</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Navegue pelos arquivos abaixo para encontrar a melhor forma de me contatar!
            </p>
          </ScrollReveal>
        </div>

        {/* VS Code File Navigation */}
        <ScrollReveal delay={0.4}>
          <div className="flex justify-center">
            <VSCodeFileNav />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
