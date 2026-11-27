// The short orange rule the brand guide uses above titles.
const BrandDash = ({ className = "" }: { className?: string }) => (
  <span aria-hidden="true" className={`block h-1 w-10 rounded-full bg-brand-orange ${className}`} />
);

export default BrandDash;
