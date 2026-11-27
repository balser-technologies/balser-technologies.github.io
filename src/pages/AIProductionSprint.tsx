import { CheckCircle2, XCircle, ShieldX, EyeOff, Rocket, Server, Lock, Activity, FileText } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceHero from "@/components/ServiceHero";
import ContactCTA from "@/components/ContactCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { sprint, serviceHref } from "@/content/services";

// Offer terms on this page (30 days, phases, 30 days of post-launch support,
// training session) are commercial commitments: confirm them before publishing.

const goodFit = [
  "Startups con un MVP o prototipo construido con herramientas de IA (Lovable, Bolt, v0, Cursor…)",
  "Equipos que empiezan a tener usuarios reales o clientes que piden garantías de seguridad",
  "Productos que van a desplegarse en AWS",
];

const notFit = [
  "Ideas todavía sin validar",
  "Empresas que ya tienen un equipo de plataforma o DevOps completo",
  "Proyectos que no van a usar AWS",
  "Migraciones enterprise grandes (mejor como proyecto de migración)",
];

const problems = [
  {
    icon: ShieldX,
    title: "Seguridad improvisada",
    description: "Claves en el código, todo en una sola cuenta de AWS y sin separación de entornos. Las revisiones de seguridad de tus clientes se atascan.",
  },
  {
    icon: EyeOff,
    title: "Sin observabilidad",
    description: "Te enteras de los problemas cuando un cliente se queja. No sabes qué pasa en producción ni por qué.",
  },
  {
    icon: Rocket,
    title: "Despliegues manuales",
    description: "Desplegar lleva horas y solo una persona sabe hacerlo. Cada release da miedo.",
  },
];

const included = [
  {
    icon: Server,
    title: "Infraestructura",
    items: ["AWS multi-cuenta (dev, staging, prod)", "Infraestructura como código con Terraform", "Autoescalado", "Base de datos gestionada con backups", "CDN (CloudFront)", "Red segmentada en VPC"],
  },
  {
    icon: Lock,
    title: "Seguridad",
    items: ["IAM con mínimo privilegio", "Secretos en AWS Secrets Manager", "Cifrado en reposo y en tránsito", "CloudTrail para auditoría", "Security groups revisados", "WAF delante de la aplicación"],
  },
  {
    icon: Activity,
    title: "Operación",
    items: ["Pipelines CI/CD con GitHub Actions", "Dashboards de monitorización", "Alertas a Slack o a tu herramienta de guardia", "Logs centralizados", "Backups automatizados", "Rollback de despliegues"],
  },
  {
    icon: FileText,
    title: "Documentación y traspaso",
    items: ["Diagramas de arquitectura", "Runbooks de operación", "Plan de recuperación ante desastres", "Guía de costes", "Sesión de formación con tu equipo", "30 días de soporte tras el lanzamiento"],
  },
];

const phases = [
  { week: "Semana 1", title: "Auditoría y diseño", items: ["Revisión de tu setup actual", "Diseño de la arquitectura de producción", "Presentación y aprobación"], deliverable: "Documento de arquitectura aprobado" },
  { week: "Semanas 2–3", title: "Implementación", items: ["Cuentas, red, IAM y Terraform", "Capa de aplicación: cómputo, base de datos, CDN", "CI/CD, monitorización y alertas"], deliverable: "Entorno de staging funcionando" },
  { week: "Semana 4", title: "Pruebas y lanzamiento", items: ["Pruebas de carga, seguridad y failover", "Validación en staging", "Paso a producción y traspaso al equipo"], deliverable: "Producción en marcha y equipo formado" },
];

const faqs = [
  {
    q: "¿Importa con qué herramienta de IA hemos construido el MVP?",
    a: "No mucho. Las herramientas generan código parecido y dejan huecos parecidos para producción: secretos, entornos, despliegues y observabilidad. Revisamos tu código y adaptamos el plan.",
  },
  {
    q: "¿Qué pasa después de los 30 días?",
    a: "Incluimos 30 días de soporte tras el lanzamiento. Después, si lo necesitas, podemos seguir con soporte continuo o con proyectos concretos.",
  },
  {
    q: "Nuestro equipo es pequeño. ¿Podremos mantenerlo?",
    a: "Sí, esa es la idea. Diseñamos la operación para el tamaño de tu equipo: automatizada, documentada y explicada.",
  },
  {
    q: "¿Trabajáis en remoto o presencial?",
    a: "Principalmente en remoto. Estamos en Málaga y podemos hacer el kickoff en persona si lo prefieres.",
  },
];

const AIProductionSprint = () => (
  <Layout>
    <ServiceHero
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Servicios", href: "/servicios" },
        { label: sprint.title, href: serviceHref(sprint.slug) },
      ]}
      headline="De prototipo con IA a producción en AWS, en 30 días"
      subheadline="Has construido tu MVP rápido con herramientas de IA. Ahora necesitas una infraestructura segura, automatizada y que tu equipo pueda operar. Ese es el sprint."
      ctaText="Pide una revisión de tu MVP"
      ctaHref="/contacto"
      imageSrc={sprint.image}
      imageAlt="Ilustración de una infraestructura cloud"
    />

    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">El hueco entre el MVP y producción</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Qué incluye</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {included.map(({ icon: Icon, title, items }) => (
            <div key={title} className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">Cuatro semanas, tres fases</h2>
        <ol className="grid md:grid-cols-3 gap-8">
          {phases.map((p, i) => (
            <li key={p.title} className="bg-card rounded-2xl p-8 shadow-soft border border-border flex flex-col">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-hero text-white font-bold text-xl mb-4">
                {i + 1}
              </div>
              <p className="text-sm font-mono text-primary mb-1">{p.week}</p>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <ul className="space-y-2 text-muted-foreground mb-6 flex-1">
                {p.items.map((it) => (
                  <li key={it}>· {it}</li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-brand-orange-text">Resultado: {p.deliverable}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-xl p-8 border border-border">
          <h2 className="text-2xl font-bold mb-6">Encaja si…</h2>
          <ul className="space-y-3">
            {goodFit.map((g) => (
              <li key={g} className="flex gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                {g}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-xl p-8 border border-border">
          <h2 className="text-2xl font-bold mb-6">No encaja si…</h2>
          <ul className="space-y-3">
            {notFit.map((n) => (
              <li key={n} className="flex gap-3 text-muted-foreground">
                <XCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">Preguntas frecuentes</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <ContactCTA
      title="Empieza con una revisión de tu MVP"
      text="Revisamos tu código y tu setup actual, señalamos los huecos de seguridad y te proponemos un plan. Sin compromiso."
    />
  </Layout>
);

export default AIProductionSprint;
