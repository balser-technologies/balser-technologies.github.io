import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  brief: string;
  href: string;
  highlight?: boolean;
}

const ServiceCard = ({ icon: Icon, title, brief, href, highlight }: ServiceCardProps) => (
  <a
    href={href}
    className={`group flex flex-col bg-card rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border-l-4 ${
      highlight ? "border-secondary" : "border-transparent hover:border-secondary"
    }`}
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    {highlight && <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange-text mb-2">Oferta destacada</span>}
    <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{brief}</p>
    <span className="inline-flex items-center font-semibold text-primary group-hover:text-secondary transition-colors">
      Conocer más
      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
    </span>
  </a>
);

export default ServiceCard;
