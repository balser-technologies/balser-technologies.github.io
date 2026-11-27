import type { ReactElement } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import AIProductionSprint from "./pages/AIProductionSprint";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { services, sprint, serviceHref } from "./content/services";
import { company } from "./content/site";

export interface SiteRoute {
  path: string;
  title: string;
  description: string;
  element: ReactElement;
}

const suffix = ` | ${company.brand}`;

export const site = company;

export const routes: SiteRoute[] = [
  {
    path: "/",
    title: `${company.brand} · Consultoría cloud y DevOps en Málaga`,
    description:
      "Consultoría cloud, DevOps y Platform Engineering en AWS desde Málaga. Diseñamos, construimos y operamos infraestructura segura y mantenible.",
    element: <Index />,
  },
  {
    path: "/servicios",
    title: `Servicios${suffix}`,
    description: "Arquitectura cloud, migración, DevOps y DevSecOps, FinOps y SRE sobre AWS.",
    element: <Services />,
  },
  {
    path: serviceHref(sprint.slug),
    title: `${sprint.title}${suffix}`,
    description: sprint.metaDescription,
    element: <AIProductionSprint />,
  },
  ...services.map((s) => ({
    path: serviceHref(s.slug),
    title: `${s.title}${suffix}`,
    description: s.metaDescription,
    element: <ServicePage service={s} />,
  })),
  {
    path: "/nosotros",
    title: `Nosotros${suffix}`,
    description: "Ingenieros cloud senior en Málaga. Quiénes somos y cómo trabajamos.",
    element: <About />,
  },
  {
    path: "/contacto",
    title: `Contacto${suffix}`,
    description: "Cuéntanos tu proyecto cloud. Respondemos personalmente.",
    element: <Contact />,
  },
  {
    path: "/aviso-legal",
    title: `Aviso legal${suffix}`,
    description: `Aviso legal de ${company.legalName}.`,
    element: <LegalNotice />,
  },
  {
    path: "/privacidad",
    title: `Política de privacidad${suffix}`,
    description: `Política de privacidad de ${company.legalName}.`,
    element: <Privacy />,
  },
];

export const notFound: SiteRoute = {
  path: "/404",
  title: `Página no encontrada${suffix}`,
  description: "La página que buscas no existe.",
  element: <NotFound />,
};
