import { tech, type TechKey } from "@/content/tech";

interface TechStackProps {
  title: string;
  items?: TechKey[];
  className?: string;
}

const TechStack = ({ title, items = Object.keys(tech) as TechKey[], className = "bg-background" }: TechStackProps) => (
  <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">{title}</h2>
      <p className="text-center text-muted-foreground mb-12">Herramientas con las que trabajamos a diario.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {items.map((key) => (
          <div
            key={key}
            className="group flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border hover:shadow-soft transition-all"
          >
            <div className="h-16 flex items-center justify-center mb-3">
              <img
                src={tech[key].logo}
                alt=""
                loading="lazy"
                className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <p className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">{tech[key].name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
