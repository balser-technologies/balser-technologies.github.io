import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ServicesOverview from "@/components/ServicesOverview";
import ContactCTA from "@/components/ContactCTA";

const Services = () => (
  <Layout>
    <PageHeader title="Servicios">
      <p>Arquitectura, migración, automatización, costes y fiabilidad sobre AWS. Puedes contratar un servicio concreto o combinarlos en un proyecto.</p>
    </PageHeader>
    <ServicesOverview heading={false} />
    <ContactCTA title="¿No sabes por dónde empezar?" text="Cuéntanos tu situación y te recomendamos el primer paso, aunque no sea con nosotros." />
  </Layout>
);

export default Services;
