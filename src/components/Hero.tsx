import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-cloud-architecture.jpg";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
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
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {prefersReducedMotion ? (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
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
            poster={heroImage}
            aria-hidden="true"
            style={{ pointerEvents: "none" }}
          >
            <source src="/videos/balser_hero_1.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Gradient Overlay - stronger on left for text readability */}
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
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-700">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Desde Málaga para empresas de toda España
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
            Moderniza, escala y asegura tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-hero">
              infraestructura cloud
            </span>{" "}
            con confianza
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Diseñamos, construimos y operamos infraestructura en AWS para startups y
            empresas tecnológicas: segura, automatizada y pensada para que tu equipo
            la entienda y la mantenga.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="/contacto">
                Cuéntanos tu proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="/servicios">Ver servicios</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Ingenieros senior en tu proyecto</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Todo como código</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span>Documentado y transferido a tu equipo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
