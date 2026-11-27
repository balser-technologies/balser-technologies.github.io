import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { company } from "@/content/site";

const Privacy = () => (
  <Layout>
    <PageHeader title="Política de privacidad" />
    <section className="pb-20 px-4">
      <div className="container mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <h2 className="text-2xl font-bold text-foreground">Responsable</h2>
        <p>
          {company.legalName} (CIF {company.taxId}), {company.city}. Contacto:{" "}
          <a className="text-primary hover:underline" href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
        <h2 className="text-2xl font-bold text-foreground">Esta web no recoge datos</h2>
        <p>Este sitio no utiliza cookies, analítica ni formularios que envíen datos a un servidor. Las fuentes tipográficas se sirven desde el propio sitio. El formulario de contacto solo prepara un email en tu programa de correo; nada se envía hasta que tú lo mandas.</p>
        <p>El alojamiento lo presta GitHub Pages, que puede registrar datos técnicos de la conexión (como la dirección IP) por motivos de seguridad, conforme a su propia política de privacidad.</p>
        <h2 className="text-2xl font-bold text-foreground">Si nos escribes</h2>
        <p>Usamos los datos de tu email (nombre, dirección, empresa y lo que nos cuentes) solo para responderte y, si llegamos a trabajar juntos, para gestionar la relación. La base legal es tu consentimiento al escribirnos y, en su caso, la ejecución de un contrato. No cedemos tus datos a terceros salvo obligación legal. Conservamos la correspondencia mientras sea necesaria para atender tu solicitud y cumplir obligaciones legales.</p>
        <h2 className="text-2xl font-bold text-foreground">Tus derechos</h2>
        <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {company.email}. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
