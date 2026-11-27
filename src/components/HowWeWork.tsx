import { UserCheck, Code2, Handshake, Scale } from "lucide-react";

const points = [
  {
    icon: UserCheck,
    title: "Hablas con quien hace el trabajo",
    text: "Sin capas comerciales ni perfiles junior rotando. Los ingenieros que diseñan tu plataforma son los que la construyen.",
  },
  {
    icon: Code2,
    title: "Todo como código",
    text: "Infraestructura, pipelines y configuración versionados en tus repositorios. Nada que solo exista en una consola.",
  },
  {
    icon: Scale,
    title: "Alcance claro",
    text: "Definimos juntos qué se entrega, cuándo y cómo se acepta. Si algo no tiene sentido para ti, te lo decimos.",
  },
  {
    icon: Handshake,
    title: "Transferencia real",
    text: "Documentación, decisiones de arquitectura registradas y sesiones con tu equipo para que pueda operar sin nosotros.",
  },
];

const HowWeWork = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Cómo trabajamos</h2>
        <p className="text-xl text-muted-foreground">Ingeniería senior, sin rodeos.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {points.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-5">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWork;
