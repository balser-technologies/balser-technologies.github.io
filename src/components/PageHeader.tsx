import type { ReactNode } from "react";
import BrandDash from "./BrandDash";

const PageHeader = ({ title, children }: { title: string; children?: ReactNode }) => (
  <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-off-white via-background to-background">
    <div className="container mx-auto max-w-5xl text-center">
      <BrandDash className="mx-auto mb-6" />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">{title}</h1>
      {children && <div className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{children}</div>}
    </div>
  </section>
);

export default PageHeader;
