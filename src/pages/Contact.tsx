import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { allServices } from "@/content/services";
import { company } from "@/content/site";

// The site is static (GitHub Pages), so the form composes an email in the
// visitor's mail client instead of posting to a server.

const faqs = [
  { q: "¿Cómo es la primera conversación?", a: "Una llamada para entender tu situación, tus objetivos y tus plazos. Si podemos ayudarte, te enviamos una propuesta con alcance y entregables. Si no, te lo decimos." },
  { q: "¿Trabajáis con empresas fuera de Málaga?", a: "Sí. Trabajamos principalmente en remoto con empresas de toda España." },
  { q: "¿Trabajáis solo con AWS?", a: "AWS es nuestra especialidad y donde aportamos más. Para otros proveedores, pregúntanos y te diremos con franqueza si encajamos." },
];

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const Contact = () => {
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Proyecto: ${get("tipo") || "consulta"} · ${get("empresa") || get("nombre")}`;
    const body = [
      `Nombre: ${get("nombre")}`,
      `Email: ${get("email")}`,
      `Empresa: ${get("empresa")}`,
      `Servicio: ${get("tipo")}`,
      "",
      get("mensaje"),
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <Layout>
      <PageHeader title="Hablemos">
        <p>Cuéntanos dónde está tu infraestructura hoy y a dónde quieres llevarla. Te respondemos personalmente.</p>
      </PageHeader>

      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-card rounded-2xl shadow-elevated border border-border p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre*</Label>
                  <Input id="nombre" name="nombre" required autoComplete="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input id="email" name="email" type="email" required autoComplete="email" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" name="empresa" autoComplete="organization" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tipo">¿En qué podemos ayudarte?</Label>
                  <select id="tipo" name="tipo" className={selectClass} defaultValue="">
                    <option value="">Selecciona una opción</option>
                    {allServices.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="No estoy seguro">No estoy seguro</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje*</Label>
                <Textarea id="mensaje" name="mensaje" rows={6} required placeholder="Tu situación actual, qué quieres conseguir y en qué plazo." className="resize-none" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Preparar email
              </Button>
              <p className="text-sm text-muted-foreground" aria-live="polite">
                {opened
                  ? `Se ha abierto tu programa de correo con el mensaje preparado. Si no se abre, escríbenos a ${company.email}.`
                  : "Al pulsar se abrirá tu programa de correo con el mensaje listo para enviar. No guardamos nada en esta web."}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
                <strong>Protección de datos.</strong> Responsable: {company.legalName}. Finalidad: responder a tu consulta y, si lo pides, preparar una propuesta. Base jurídica: medidas precontractuales a tu petición e interés legítimo. Destinatarios: no se ceden datos a terceros salvo obligación legal. Derechos: acceso, rectificación, supresión y otros, escribiendo a {company.privacyEmail}. Más información en la{" "}
                <a href="/privacidad" className="text-primary hover:underline">
                  política de privacidad
                </a>
                .
              </p>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-8 space-y-5">
              <h2 className="text-xl font-bold">Contacto directo</h2>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="text-muted-foreground hover:text-primary break-all">
                  {company.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{company.registeredAddress}</p>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-bold mb-4">Preguntas frecuentes</h2>
              <Accordion type="single" collapsible>
                {faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`c-${i}`}>
                    <AccordionTrigger className="text-left text-sm font-semibold">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
