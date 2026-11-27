import logoPrincipal from "@/assets/brand/balser-horizontal-principal.svg";
import logoInvertido from "@/assets/brand/balser-horizontal-invertido.svg";

// Approved artwork from the brand kit. The guide sets a 200 px minimum width
// for the horizontal logo; use the inverted version on azul profundo.
const Logo = ({ inverted = false, className = "w-[200px]" }: { inverted?: boolean; className?: string }) => (
  <img
    src={inverted ? logoInvertido : logoPrincipal}
    alt="BALSER Technologies"
    width={880}
    height={196}
    className={`h-auto ${className}`}
  />
);

export default Logo;
