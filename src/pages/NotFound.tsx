import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <Layout>
    <section className="pt-40 pb-32 px-4 text-center">
      <p className="text-sm font-mono text-primary mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Esta página no existe</h1>
      <p className="text-lg text-muted-foreground mb-8">Puede que el enlace haya cambiado al renovar la web.</p>
      <Button asChild>
        <a href="/">Volver al inicio</a>
      </Button>
    </section>
  </Layout>
);

export default NotFound;
