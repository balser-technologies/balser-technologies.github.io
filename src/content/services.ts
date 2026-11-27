import { Cloud, CloudUpload, GitBranch, Euro, Activity, Rocket, type LucideIcon } from "lucide-react";
import heroArquitectura from "@/assets/hero-arquitectura-cloud.jpg";
import heroMigracion from "@/assets/hero-migracion-cloud.jpg";
import heroDevops from "@/assets/hero-devops.jpg";
import heroFinops from "@/assets/hero-finops.jpg";
import heroSre from "@/assets/hero-sre.jpg";
import heroCloud from "@/assets/hero-cloud-architecture.jpg";
import { tech, type TechKey } from "./tech";

export interface ProcessStep {
  title: string;
  subtitle: string;
  description: string;
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  /** One sentence for cards and menus. */
  brief: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  image: string;
  imageAlt: string;
  deliverables: string[];
  steps: ProcessStep[];
  stack: TechKey[];
}

// Content rule: describe what we do and how. No client names, no percentages,
// no partner badges, no certifications and no guarantees unless they are real
// and can be shown on request.
export const services: Service[] = [
  {
    slug: "arquitectura-cloud",
    icon: Cloud,
    title: "Arquitectura Cloud",
    brief: "Diseñamos entornos AWS multi-cuenta seguros, mantenibles y pensados para crecer contigo.",
    metaDescription:
      "Diseño de arquitecturas AWS multi-cuenta siguiendo el AWS Well-Architected Framework, desplegadas como código con Terraform y Terragrunt.",
    headline: "Arquitectura cloud diseñada para crecer contigo",
    subheadline:
      "Diseñamos entornos AWS multi-cuenta que aplican las buenas prácticas de AWS a las necesidades reales de tu producto, y los dejamos desplegados como código.",
    image: heroArquitectura,
    imageAlt: "Ilustración de una arquitectura cloud en AWS",
    deliverables: [
      "Organización AWS multi-cuenta con guardarraíles, siguiendo el AWS Well-Architected Framework",
      "Estrategia de alta disponibilidad y recuperación ante desastres acorde a tus objetivos de RTO y RPO",
      "Diseño de red: VPC, conectividad entre cuentas y endpoints privados",
      "Documentación de arquitectura con diagramas, decisiones registradas y runbooks",
    ],
    steps: [
      { title: "Análisis", subtitle: "Discovery", description: "Entendemos tu negocio, tu stack actual y tus objetivos." },
      { title: "Diseño", subtitle: "Design", description: "Equilibramos rendimiento, seguridad y coste, y documentamos cada decisión." },
      { title: "Implementación", subtitle: "Build", description: "Desplegamos como código con Terraform y Terragrunt." },
      { title: "Mejora", subtitle: "Optimize", description: "Revisamos y ajustamos con métricas reales de uso." },
    ],
    stack: ["aws", "terraform", "kubernetes", "docker", "postgresql", "cloudwatch"],
  },
  {
    slug: "migracion-cloud",
    icon: CloudUpload,
    title: "Migración Cloud",
    brief: "Llevamos tus aplicaciones a AWS por fases, con plan de rollback en cada paso.",
    metaDescription:
      "Migración de aplicaciones y bases de datos a AWS por fases: assessment, estrategia (rehost, replatform, refactor), ejecución y optimización.",
    headline: "Migración a la nube, por fases y con un plan B",
    subheadline:
      "Trasladamos tus aplicaciones a AWS con una estrategia por fases que reduce el riesgo y el tiempo de corte.",
    image: heroMigracion,
    imageAlt: "Ilustración de una migración de aplicaciones a la nube",
    deliverables: [
      "Assessment de tu infraestructura actual y plan de migración detallado",
      "Contenerización y modernización de aplicaciones con Docker y Kubernetes",
      "Migración de bases de datos con estrategia de sincronización y rollback",
      "Pruebas de validación y plan de contingencia para cada fase",
    ],
    steps: [
      { title: "Evaluación", subtitle: "Assess", description: "Revisamos tu infraestructura y tus aplicaciones actuales." },
      { title: "Planificación", subtitle: "Plan", description: "Elegimos la estrategia adecuada: rehost, replatform o refactor." },
      { title: "Migración", subtitle: "Migrate", description: "Migramos por fases, validando cada paso." },
      { title: "Optimización", subtitle: "Optimize", description: "Ajustamos la configuración tras la migración." },
    ],
    stack: ["aws", "docker", "kubernetes", "terraform", "postgresql", "github-actions"],
  },
  {
    slug: "devops-devsecops",
    icon: GitBranch,
    title: "DevOps & DevSecOps",
    brief: "Pipelines CI/CD automatizados, con la seguridad integrada en cada etapa.",
    metaDescription:
      "Pipelines CI/CD con GitHub Actions, infraestructura como código con Terraform y Terragrunt, GitOps con Argo CD y escaneo de seguridad automatizado.",
    headline: "DevOps que acelera, DevSecOps que protege",
    subheadline:
      "Automatizamos tu ciclo de desarrollo e integramos la seguridad desde el primer commit hasta producción.",
    image: heroDevops,
    imageAlt: "Ilustración de un pipeline CI/CD",
    deliverables: [
      "Pipelines CI/CD automatizados con GitHub Actions",
      "Infraestructura como código con Terraform y Terragrunt",
      "Escaneo de seguridad en el pipeline: código, dependencias, contenedores e IaC",
      "GitOps con Argo CD para despliegues declarativos y auditables",
    ],
    steps: [
      { title: "Diagnóstico", subtitle: "Assess", description: "Evaluamos tu ciclo de desarrollo y sus cuellos de botella." },
      { title: "Diseño", subtitle: "Design", description: "Diseñamos pipelines con controles de calidad y seguridad." },
      { title: "Automatización", subtitle: "Automate", description: "Automatizamos build, test, escaneo y despliegue." },
      { title: "Medición", subtitle: "Measure", description: "Seguimos las métricas DORA y mejoramos con datos." },
    ],
    stack: ["github-actions", "terraform", "argocd", "kubernetes", "docker", "aws"],
  },
  {
    slug: "finops",
    icon: Euro,
    title: "FinOps",
    brief: "Visibilidad y control de tu gasto cloud, con acciones concretas para reducirlo.",
    metaDescription:
      "FinOps en AWS: análisis de la factura, rightsizing, Savings Plans, políticas de apagado y dashboards de costes con alertas.",
    headline: "FinOps: visibilidad y control de tu gasto cloud",
    subheadline:
      "Analizamos tu factura de AWS, eliminamos el gasto que no aporta valor y dejamos alertas para que no vuelva a crecer sin control.",
    image: heroFinops,
    imageAlt: "Ilustración de un panel de costes cloud",
    deliverables: [
      "Análisis detallado de costes e identificación de gasto innecesario",
      "Rightsizing de instancias y bases de datos basado en métricas reales",
      "Políticas de autoescalado y apagado automático de entornos no productivos",
      "Dashboards de costes con presupuestos y alertas",
    ],
    steps: [
      { title: "Auditoría", subtitle: "Inform", description: "Revisamos tu factura de AWS y tus patrones de uso." },
      { title: "Acciones rápidas", subtitle: "Optimize", description: "Aplicamos las mejoras inmediatas: rightsizing, Savings Plans, limpieza." },
      { title: "Gobierno", subtitle: "Operate", description: "Creamos presupuestos, políticas y alertas para el control continuo." },
      { title: "Formación", subtitle: "Enable", description: "Formamos a tu equipo en buenas prácticas de coste." },
    ],
    stack: ["aws", "cloudwatch", "terraform", "grafana"],
  },
  {
    slug: "sre-services",
    icon: Activity,
    title: "Site Reliability Engineering",
    brief: "Observabilidad, SLOs y respuesta a incidentes para que sepas cómo está tu servicio.",
    metaDescription:
      "Site Reliability Engineering: observabilidad con Prometheus y Grafana, SLOs y error budgets, alertas accionables y runbooks de incidentes.",
    headline: "SRE: fiabilidad medida, no supuesta",
    subheadline:
      "Aplicamos prácticas de Site Reliability Engineering para que detectes los problemas antes que tus clientes y sepas cómo responder.",
    image: heroSre,
    imageAlt: "Ilustración de un panel de observabilidad",
    deliverables: [
      "Stack de observabilidad: métricas, logs y trazas (Prometheus, Grafana, Loki)",
      "Definición de SLIs, SLOs y error budgets",
      "Alertas accionables y runbooks para la respuesta a incidentes",
      "Postmortems sin culpables y plan de mejora continua",
    ],
    steps: [
      { title: "Observabilidad", subtitle: "Observe", description: "Implementamos monitorización, logging y trazas distribuidas." },
      { title: "Objetivos", subtitle: "Define", description: "Definimos objetivos de disponibilidad según tu negocio." },
      { title: "Respuesta", subtitle: "Respond", description: "Preparamos alertas, runbooks y automatismos para incidentes comunes." },
      { title: "Aprendizaje", subtitle: "Learn", description: "Analizamos sin culpables y mejoramos de forma continua." },
    ],
    stack: ["prometheus", "grafana", "kubernetes", "aws", "cloudwatch"],
  },
];

export const sprint = {
  slug: "ai-production-sprint",
  icon: Rocket,
  title: "AI-to-Production Sprint",
  brief: "De prototipo hecho con IA a infraestructura de producción en AWS en 30 días.",
  metaDescription:
    "Sprint de 30 días para llevar un MVP creado con herramientas de IA a una infraestructura de producción segura en AWS: multi-cuenta, IaC, CI/CD y monitorización.",
  image: heroCloud,
};

export const allServices = [
  { slug: sprint.slug, icon: sprint.icon, title: sprint.title, brief: sprint.brief, highlight: true },
  ...services.map(({ slug, icon, title, brief }) => ({ slug, icon, title, brief, highlight: false })),
];

export const serviceHref = (slug: string) => `/servicios/${slug}`;

export { tech };
