import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { company } from "@/content/site";

const Mail = ({ to }: { to: string }) => (
  <a className="text-primary hover:underline" href={`mailto:${to}`}>
    {to}
  </a>
);

const LegalNotice = () => (
  <Layout>
    <PageHeader title="Aviso legal" />
    <section className="pb-20 px-4">
      <div className="container mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <h2 className="text-2xl font-bold text-foreground">Titular del sitio web</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Denominación social: {company.legalName}</li>
          <li>NIF: {company.taxId}</li>
          <li>Domicilio social: {company.registeredAddress}</li>
          <li>Datos registrales: {company.registryEntry}</li>
          <li>
            Email: <Mail to={company.email} />
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-foreground">Condiciones de uso</h2>
        <p>El acceso a este sitio web es gratuito y no exige registro. Al usarlo te comprometes a hacerlo conforme a la ley y a no realizar acciones que puedan dañar el sitio o impedir su uso normal.</p>
        <h2 className="text-2xl font-bold text-foreground">Propiedad intelectual e industrial</h2>
        <p>
          Los textos, diseños e imágenes de este sitio son titularidad de {company.legalName} o se usan con autorización. Las marcas y logotipos de terceros pertenecen a sus titulares y se muestran solo para identificar las tecnologías que utilizamos; su presencia no implica relación comercial, certificación ni patrocinio.
        </p>
        <h2 className="text-2xl font-bold text-foreground">Responsabilidad</h2>
        <p>La información de este sitio es general e informativa. No constituye una oferta vinculante: el alcance, los plazos y las condiciones de cada servicio se acuerdan por escrito en cada propuesta.</p>
        <h2 className="text-2xl font-bold text-foreground">Protección de datos</h2>
        <p>
          El tratamiento de datos personales se explica en la <a className="text-primary hover:underline" href="/privacidad">política de privacidad</a>. Este sitio no utiliza cookies.
        </p>
        <h2 id="seguridad" className="text-2xl font-bold text-foreground">Seguridad</h2>
        <p>
          Si encuentras una vulnerabilidad en este sitio o en nuestros sistemas, escríbenos a <Mail to={company.securityEmail} />. También lo publicamos en <a className="text-primary hover:underline" href="/.well-known/security.txt">/.well-known/security.txt</a>.
        </p>
        <h2 className="text-2xl font-bold text-foreground">Legislación aplicable</h2>
        <p>Este aviso legal se rige por la legislación española.</p>
      </div>
    </section>
  </Layout>
);

export default LegalNotice;
