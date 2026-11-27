import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BrandDash from "./BrandDash";
import heroFallback from "@/assets/hero-cloud-architecture.jpg";

interface ServiceHeroProps {
  breadcrumbs: { label: string; href: string }[];
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

const ServiceHero = ({
  breadcrumbs,
  headline,
  subheadline,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
}: ServiceHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (videoRef.current) {
        if (e.matches) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {prefersReducedMotion ? (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroFallback})` }}
          />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroFallback}
            aria-hidden="true"
            style={{ pointerEvents: "none" }}
          >
            <source src="/videos/balser_hero_1.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to right,
              hsl(var(--background) / 0.95) 0%,
              hsl(var(--background) / 0.85) 30%,
              hsl(var(--background) / 0.7) 50%,
              hsl(var(--background) / 0.5) 70%,
              hsl(var(--background) / 0.3) 100%
            )`
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Ruta de navegación">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              <a
                href={crumb.href}
                className={
                  index === breadcrumbs.length - 1
                    ? "text-foreground font-medium"
                    : "hover:text-foreground transition-colors"
                }
              >
                {crumb.label}
              </a>
            </div>
          ))}
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <BrandDash />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {headline}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {subheadline}
            </p>

            <div className="pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href={ctaHref}>{ctaText}</a>
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
              {/* Gradient Overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 mix-blend-overlay rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
