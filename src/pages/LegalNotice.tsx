import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { company } from "@/content/site";

const LegalNotice = () => (
  <Layout>
    <PageHeader title="Aviso legal" />
    <section className="pb-20 px-4">
      <div className="container mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <h2 className="text-2xl font-bold text-foreground">Titular del sitio web</h2>
        <p>En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Denominación social: {company.legalName}</li>
          <li>CIF: {company.taxId}</li>
          {company.registeredAddress ? <li>Domicilio social: {company.registeredAddress}</li> : <li>Sede: {company.city}</li>}
          {company.registryEntry && <li>Datos registrales: {company.registryEntry}</li>}
          <li>
            Email: <a className="text-primary hover:underline" href={`mailto:${company.email}`}>{company.email}</a>
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-foreground">Propiedad intelectual</h2>
        <p>Los contenidos de este sitio web son titularidad de {company.legalName} o se utilizan con autorización. Las marcas y logotipos de terceros que aparecen pertenecen a sus respectivos titulares y se muestran solo para identificar las tecnologías que utilizamos; su presencia no implica relación comercial ni patrocinio.</p>
        <h2 className="text-2xl font-bold text-foreground">Responsabilidad</h2>
        <p>La información de este sitio tiene carácter general e informativo. No constituye una oferta vinculante: el alcance, los plazos y las condiciones de cada servicio se acuerdan por escrito en cada propuesta.</p>
      </div>
    </section>
  </Layout>
);

export default LegalNotice;
