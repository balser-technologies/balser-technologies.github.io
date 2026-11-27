import { Zap, ShieldCheck, BookOpen } from "lucide-react";

const cards = [
  {
    icon: Zap,
    heading: "Entregas más rápidas",
    text: "Automatizamos la infraestructura y los despliegues para que lanzar una funcionalidad sea rutina, no un evento.",
  },
  {
    icon: ShieldCheck,
    heading: "Seguridad desde el diseño",
    text: "Controles de seguridad y requisitos normativos (GDPR, NIS2, DORA) integrados en la arquitectura, no añadidos al final.",
  },
  {
    icon: BookOpen,
    heading: "Sin dependencia de nosotros",
    text: "Todo queda en código, documentado y explicado a tu equipo. Si mañana dejamos de trabajar juntos, sigues funcionando.",
  },
];

const ValueProps = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
    <div className="container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Infraestructura cloud que impulsa tu crecimiento</h2>
        <p className="text-xl text-muted-foreground">Hacemos que la nube trabaje a favor de tu producto, no en su contra.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map(({ icon: Icon, heading, text }) => (
          <div
            key={heading}
            className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-[0_10px_40px_-10px_hsl(var(--cyan-bright)/0.4)] hover:-translate-y-2 transition-all duration-300 border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">{heading}</h3>
            <p className="text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
