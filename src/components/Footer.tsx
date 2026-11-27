import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { allServices, serviceHref } from "@/content/services";
import { company } from "@/content/site";

const companyLinks = [
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/privacidad" },
];

const Footer = () => (
  <footer className="bg-charcoal text-off-white">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <div className="space-y-4">
          <Logo inverted />
          <p className="text-sm font-medium text-off-white/90">{company.tagline}</p>
          <p className="text-sm text-off-white/70 leading-relaxed">
            Consultoría cloud, DevOps y Platform Engineering sobre AWS, desde Málaga.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Servicios</h2>
          <ul className="space-y-3">
            {allServices.map((s) => (
              <li key={s.slug}>
                <a href={serviceHref(s.slug)} className="text-sm text-off-white/70 hover:text-cyan-bright transition-colors">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Empresa</h2>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-off-white/70 hover:text-cyan-bright transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Contacto</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-cyan-bright mt-0.5 flex-shrink-0" />
              <a href={`mailto:${company.email}`} className="text-sm text-off-white/70 hover:text-cyan-bright transition-colors break-all">
                {company.email}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-cyan-bright mt-0.5 flex-shrink-0" />
              <p className="text-sm text-off-white/70">{company.city}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 border-off-white/20 text-off-white hover:bg-primary hover:text-white hover:border-primary"
              asChild
            >
              <a href="/contacto">Cuéntanos tu proyecto</a>
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-off-white/10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-center lg:text-left text-off-white/60">
          <p>
            © {new Date().getFullYear()} {company.legalName} · NIF {company.taxId} · {company.registeredAddress}
          </p>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-cyan-bright transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
