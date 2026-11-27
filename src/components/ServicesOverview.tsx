import ServiceCard from "./ServiceCard";
import { allServices, serviceHref } from "@/content/services";

const ServicesOverview = ({ heading = true }: { heading?: boolean }) => (
  <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div className="container mx-auto">
      {heading && (
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros servicios</h2>
          <p className="text-xl text-muted-foreground">Del diseño a la operación: modernizamos, escalamos y protegemos tu infraestructura cloud.</p>
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {allServices.map((s) => (
          <ServiceCard key={s.slug} icon={s.icon} title={s.title} brief={s.brief} href={serviceHref(s.slug)} highlight={s.highlight} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
