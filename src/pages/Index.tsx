import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import ServicesOverview from "@/components/ServicesOverview";
import HowWeWork from "@/components/HowWeWork";
import TechStack from "@/components/TechStack";
import ContactCTA from "@/components/ContactCTA";

const Index = () => (
  <Layout>
    <Hero />
    <ValueProps />
    <ServicesOverview />
    <HowWeWork />
    <TechStack title="Tecnologías que usamos" className="bg-muted/30" />
    <ContactCTA />
  </Layout>
);

export default Index;
