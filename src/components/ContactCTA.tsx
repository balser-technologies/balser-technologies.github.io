import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ctaBackground from "@/assets/cta-background.jpg";
import { company } from "@/content/site";

interface ContactCTAProps {
  title?: string;
  text?: string;
}

const ContactCTA = ({
  title = "¿Hablamos de tu infraestructura?",
  text = "Cuéntanos dónde estás y a dónde quieres llegar. Te respondemos personalmente con una propuesta de siguientes pasos.",
}: ContactCTAProps) => (
  <section className="relative py-24 px-6">
    <div className="absolute inset-0 z-0">
      <img src={ctaBackground} alt="" loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/80" />
    </div>
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground mb-8">{text}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="group" asChild>
            <a href="/contacto">
              Cuéntanos tu proyecto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href={`mailto:${company.email}`}>
              <Mail className="w-5 h-5" />
              {company.email}
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default ContactCTA;
