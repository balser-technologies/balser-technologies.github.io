import type { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background flex flex-col">
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-card focus:px-4 focus:py-2 focus:rounded-md focus:shadow-elevated"
    >
      Saltar al contenido
    </a>
    <Navigation />
    <main id="contenido" className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
