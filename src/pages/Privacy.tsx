import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { company } from "@/content/site";

// Information required by GDPR art. 13 and LOPDGDD art. 11. Review it whenever
// the site starts collecting data (form backend, analytics, newsletter, chat).
const UPDATED = "27 de noviembre de 2026";

const Mail = ({ to }: { to: string }) => (
  <a className="text-primary hover:underline" href={`mailto:${to}`}>
    {to}
  </a>
);

const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="text-2xl font-bold text-foreground pt-2">{children}</h2>;

const Privacy = () => (
  <Layout>
    <PageHeader title="Política de privacidad">
      <p>Última actualización: {UPDATED}</p>
    </PageHeader>
    <section className="pb-20 px-4">
      <div className="container mx-auto max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
        <H2>Resumen</H2>
        <p>
          Esta web no usa cookies, analítica ni formularios que envíen datos a un servidor. Solo tratamos tus datos si nos escribes por email, y solo para responderte.
        </p>

        <H2>1. Responsable del tratamiento</H2>
        <ul className="list-disc pl-6 space-y-1">
          <li>{company.legalName}, NIF {company.taxId}</li>
          <li>{company.registeredAddress}</li>
          <li>
            Contacto de protección de datos: <Mail to={company.privacyEmail} />
          </li>
        </ul>

        <H2>2. Qué datos tratamos y para qué</H2>
        <p>
          <strong className="text-foreground">Navegación.</strong> No instalamos cookies ni otras tecnologías de seguimiento, y las fuentes, imágenes y vídeos se sirven desde este mismo dominio. Nuestro proveedor de alojamiento registra datos técnicos de cada conexión (dirección IP, navegador, página solicitada) para prestar el servicio y protegerlo.
        </p>
        <p>
          <strong className="text-foreground">Contacto.</strong> El formulario de contacto no envía nada: prepara un email en tu programa de correo. Si nos escribes, tratamos tu nombre, email, empresa y lo que nos cuentes para responderte y, si lo pides, preparar una propuesta.
        </p>
        <p>
          <strong className="text-foreground">Clientes y proveedores.</strong> Si llegamos a trabajar juntos, tratamos los datos de contacto de las personas de tu organización para gestionar la relación, facturar y cumplir nuestras obligaciones legales.
        </p>

        <H2>3. Base jurídica</H2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Responder a tu consulta y preparar una propuesta: aplicación de medidas precontractuales a petición tuya (art. 6.1.b RGPD) o nuestro interés legítimo en atender las consultas que recibimos (art. 6.1.f RGPD).</li>
          <li>Gestionar un contrato: ejecución del contrato (art. 6.1.b RGPD).</li>
          <li>Facturación y obligaciones fiscales y contables: obligación legal (art. 6.1.c RGPD).</li>
          <li>Registros técnicos del alojamiento: interés legítimo en la seguridad del sitio (art. 6.1.f RGPD).</li>
        </ul>
        <p>No enviamos comunicaciones comerciales sin tu consentimiento previo y no tomamos decisiones automatizadas ni elaboramos perfiles con tus datos.</p>

        <H2>4. Cuánto tiempo los conservamos</H2>
        <p>
          Las consultas que no terminan en un contrato, hasta un año después del último contacto. Los datos de clientes, mientras dure la relación y después durante los plazos legales de prescripción y conservación (por ejemplo, seis años para la documentación mercantil y contable). Los registros técnicos del alojamiento, los plazos que fija el proveedor.
        </p>

        <H2>5. Destinatarios y encargados del tratamiento</H2>
        <p>No vendemos ni cedemos tus datos a terceros, salvo obligación legal. Para operar usamos proveedores que tratan datos por cuenta nuestra con un contrato de encargo:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Alojamiento web: GitHub, Inc. (GitHub Pages), Estados Unidos.</li>
          <li>Correo electrónico: Zoho Corporation, con datos alojados en la Unión Europea.</li>
        </ul>

        <H2>6. Transferencias internacionales</H2>
        <p>
          GitHub, Inc. está en Estados Unidos y está adherida al Marco de Privacidad de Datos UE-EE. UU. (decisión de adecuación de la Comisión Europea de 10 de julio de 2023); además, sus condiciones incluyen las cláusulas contractuales tipo de la Comisión Europea.
        </p>

        <H2>7. Tus derechos</H2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a <Mail to={company.privacyEmail} />, indicando qué derecho quieres ejercer. Te responderemos en el plazo de un mes. Si el tratamiento se basa en tu consentimiento, puedes retirarlo en cualquier momento sin que afecte a lo tratado antes.
        </p>
        <p>
          Si crees que no hemos tratado bien tus datos, puedes reclamar ante la Agencia Española de Protección de Datos (<a className="text-primary hover:underline" href="https://www.aepd.es" rel="noopener noreferrer">www.aepd.es</a>).
        </p>

        <H2>8. Seguridad</H2>
        <p>
          Aplicamos medidas técnicas y organizativas adecuadas al riesgo: el sitio se sirve solo por HTTPS, no almacena datos personales y su código y su publicación están controlados con revisión de cambios. Puedes comunicarnos cualquier problema de seguridad en <Mail to={company.securityEmail} />.
        </p>

        <H2>9. Cookies</H2>
        <p>Este sitio no utiliza cookies propias ni de terceros. Si eso cambia, actualizaremos esta política y te pediremos consentimiento antes de usar cualquier cookie no necesaria.</p>

        <H2>10. Cambios en esta política</H2>
        <p>Si cambiamos esta política, publicaremos la nueva versión en esta página con su fecha de actualización.</p>
      </div>
    </section>
  </Layout>
);

export default Privacy;
