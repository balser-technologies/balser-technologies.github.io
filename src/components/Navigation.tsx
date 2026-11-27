import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";
import Logo from "./Logo";
import { allServices, serviceHref } from "@/content/services";

const menuItems = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { pathname } = useLocation();

  const isActivePath = (path: string) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const desktopLink = (active: boolean) =>
    `font-medium transition-all duration-200 py-1 ${
      active ? "text-primary border-b-2 border-brand-orange" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border" aria-label="Principal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" aria-label="BALSER Technologies, inicio">
            <Logo />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className={desktopLink(isActivePath("/"))}>
              Inicio
            </a>

            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              onFocus={handleDropdownEnter}
              onBlur={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 ${desktopLink(isActivePath("/servicios"))}`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((o) => !o)}
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                  dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-popover border border-border rounded-lg shadow-elevated py-2 min-w-[260px]">
                  {allServices.map((service) => (
                    <a
                      key={service.slug}
                      href={serviceHref(service.slug)}
                      className={`block px-4 py-2.5 text-sm transition-colors hover:bg-muted ${
                        service.highlight ? "text-brand-orange-text font-semibold" : "text-popover-foreground"
                      }`}
                    >
                      {service.title}
                    </a>
                  ))}
                  <div className="my-2 border-t border-border" />
                  <a href="/servicios" className="block px-4 py-2.5 text-sm font-medium text-primary hover:bg-muted transition-colors">
                    Ver todos los servicios
                  </a>
                </div>
              </div>
            </div>

            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className={desktopLink(isActivePath(item.href))}>
                {item.label}
              </a>
            ))}

            <Button variant="default" size="sm" asChild>
              <a href="/contacto">Hablemos</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 z-40 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            <a
              href="/"
              className={`block py-3 px-4 rounded-lg font-medium ${isActivePath("/") ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"}`}
            >
              Inicio
            </a>
            <div className="space-y-1">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium ${
                  mobileServicesOpen ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                }`}
              >
                <span>Servicios</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[600px]" : "max-h-0"}`}>
                <div className="pl-4 space-y-1 py-2">
                  {allServices.map((service) => (
                    <a
                      key={service.slug}
                      href={serviceHref(service.slug)}
                      className={`block py-2.5 px-4 rounded-lg hover:bg-muted ${
                        service.highlight ? "text-brand-orange-text font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      {service.title}
                    </a>
                  ))}
                  <a href="/servicios" className="block py-2.5 px-4 rounded-lg font-medium text-primary hover:bg-muted">
                    Ver todos los servicios
                  </a>
                </div>
              </div>
            </div>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block py-3 px-4 rounded-lg font-medium ${
                  isActivePath(item.href) ? "text-primary bg-primary/10" : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6">
              <Button className="w-full" asChild>
                <a href="/contacto">Hablemos</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
