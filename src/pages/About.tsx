import { Target, Users, Lightbulb, BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import TechStack from "@/components/TechStack";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Target, title: "Resultados, no horas", description: "Cada proyecto empieza con objetivos claros y criterios de aceptación acordados." },
  { icon: Users, title: "Socios, no proveedores", description: "Entendemos tu negocio y diseñamos lo que de verdad necesita, aunque eso signifique menos trabajo para nosotros." },
  { icon: Lightbulb, title: "Pragmatismo", description: "Usamos una tecnología cuando aporta valor real, no porque esté de moda." },
  { icon: BookOpen, title: "Transparencia", description: "Documentación completa, decisiones registradas y visibilidad en cada etapa del proyecto." },
];

const expertise = [
  { category: "AWS", skills: "Organizaciones multi-cuenta, redes, seguridad y AWS Well-Architected" },
  { category: "Infraestructura como código", skills: "Terraform, OpenTofu y Terragrunt" },
  { category: "Kubernetes", skills: "Amazon EKS, autoescalado y GitOps con Argo CD" },
  { category: "CI/CD", skills: "GitHub Actions y pipelines con controles de seguridad" },
  { category: "Observabilidad", skills: "Prometheus, Grafana y CloudWatch" },
  { category: "Seguridad y cumplimiento", skills: "DevSecOps, gestión de secretos y requisitos GDPR, NIS2 y DORA" },
];

const About = () => (
  <Layout>
    <PageHeader title="Ingenieros cloud en Málaga">
      <p>Somos un equipo pequeño de ingenieros senior en cloud y DevOps. Ayudamos a startups y empresas tecnológicas a construir infraestructura sólida, segura y fácil de mantener.</p>
    </PageHeader>

    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Nuestra misión</h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-center">
          Creemos que la infraestructura cloud debería impulsar el crecimiento, no ser una fuente de complejidad. Por eso diseñamos y construimos plataformas que funcionan, que escalan cuando hace falta y que tu equipo entiende.
        </p>
      </div>
    </section>

    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Qué nos define</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-card border border-border rounded-lg p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">En qué somos buenos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((item) => (
            <div key={item.category} className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-primary">{item.category}</h3>
              <p className="text-sm text-muted-foreground">{item.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Desde Málaga, en remoto para toda España</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Trabajamos principalmente en remoto y nos desplazamos cuando un proyecto lo pide. Hablas directamente con los ingenieros que trabajan en tu proyecto.
        </p>
      </div>
    </section>

    <TechStack title="Tecnologías que usamos" />

    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres conocernos?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="/contacto">
              Cuéntanos tu proyecto
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/servicios">Ver servicios</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
