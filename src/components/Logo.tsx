interface LogoProps {
  inverted?: boolean;
  compact?: boolean;
}

const Logo = ({ inverted = false, compact = false }: LogoProps) => (
  <span className="flex items-center gap-2">
    <span className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center" aria-hidden="true">
      <span className="text-white font-bold text-xl">B</span>
    </span>
    <span className={`font-bold text-xl ${inverted ? "text-off-white" : "text-foreground"}`}>
      BALSER{!compact && <span className="font-medium"> Technologies</span>}
    </span>
  </span>
);

export default Logo;
