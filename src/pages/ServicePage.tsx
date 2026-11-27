import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceHero from "@/components/ServiceHero";
import TechStack from "@/components/TechStack";
import ContactCTA from "@/components/ContactCTA";
import { serviceHref, type Service } from "@/content/services";

const ServicePage = ({ service }: { service: Service }) => (
  <Layout>
    <ServiceHero
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/servicios" },
        { label: service.title, href: serviceHref(service.slug) },
      ]}
      headline={service.headline}
      subheadline={service.subheadline}
      ctaText="Hablemos de tu proyecto"
      ctaHref="/contacto"
      imageSrc={service.image}
      imageAlt={service.imageAlt}
    />

    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Qué entregamos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {service.deliverables.map((item) => (
            <div key={item} className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:shadow-soft transition-shadow">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Nuestro enfoque</h2>
        <ol className="grid md:grid-cols-4 gap-8">
          {service.steps.map((step, index) => (
            <li key={step.title} className="relative">
              {index < service.steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border -z-10" aria-hidden="true" />
              )}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-hero text-white font-bold text-2xl mb-4 shadow-soft">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm font-mono text-primary mb-3">{step.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <TechStack title="Tecnologías" items={service.stack} />

    <ContactCTA />
  </Layout>
);

export default ServicePage;
