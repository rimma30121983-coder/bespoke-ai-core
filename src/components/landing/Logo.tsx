import logoFull from "@/assets/logo-full.svg";
import logoMark from "@/assets/logo-mark.svg";

type LogoProps = {
  className?: string;
  /** Height in px applied to the full logo image. */
  height?: number;
  /** Use compact variant (mark + text) instead of the full logo. */
  compact?: boolean;
};

export function Logo({ className = "", height = 40, compact = false }: LogoProps) {
  if (compact) {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <img
          src={logoMark}
          alt="CRM AI Systems"
          style={{ height, width: height }}
          className="block shrink-0"
          draggable={false}
        />
        <span className="font-semibold tracking-tight leading-none text-base">
          <span className="text-foreground">CRM</span>{" "}
          <span className="gradient-text">AI Systems</span>
        </span>
      </span>
    );
  }

  return (
    <img
      src={logoFull}
      alt="CRM AI Systems"
      style={{ height }}
      className={`block w-auto shrink-0 select-none ${className}`}
      draggable={false}
    />
  );
}

export function LogoMarkImg({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <img
      src={logoMark}
      alt="CRM AI Systems"
      style={{ height: size, width: size }}
      className={`block shrink-0 ${className}`}
      draggable={false}
    />
  );
}
