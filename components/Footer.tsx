import { ScrollReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-card/30 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 py-8">
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left hover:text-foreground transition-colors duration-300">
              © {new Date().getFullYear()} Sebastian Augusto. Todos os direitos reservados.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
