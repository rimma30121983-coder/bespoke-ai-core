import logoFull from "@/assets/logo-full.svg";
import logoMark from "@/assets/logo-mark.svg";

type LogoProps = {
  className?: string;
  /** Height in px applied to the full logo image. */
  height?: number;
  /** Use compact variant (mark + HTML text) instead of the full SVG logo. */
  compact?: boolean;
};

export function Logo({ className = "", height, compact = false }: LogoProps) {
  if (compact) {
    return (
      <span className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
        <img
          src={logoMark}
          alt=""
          aria-hidden="true"
          className="block shrink-0 h-9 w-9 sm:h-11 sm:w-11 lg:h-12 lg:w-12"
          draggable={false}
        />
        <span
          className="font-bold leading-none text-[17px] sm:text-[20px] lg:text-[23px] whitespace-nowrap"
          style={{ letterSpacing: "-0.02em", fontFamily: "Sora, Manrope, sans-serif" }}
        >
          <span style={{ color: "#F8FAFC" }}>CRM</span>{" "}
          <span className="gradient-text">AI Systems</span>
        </span>
      </span>
    );
  }

  return (
    <img
      src={logoFull}
      alt="CRM AI Systems"
      style={height ? { height } : undefined}
      className={`block w-auto shrink-0 select-none ${className}`}
      draggable={false}
    />
  );
}

/** Lockup with mark + HTML text and an optional tagline below (footer use). */
export function LogoLockup({
  markSize = 52,
  textSize = 24,
  tagline,
  className = "",
}: {
  markSize?: number;
  textSize?: number;
  tagline?: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        style={{ height: markSize, width: markSize }}
        className="block shrink-0"
        draggable={false}
      />
      <div className="flex flex-col gap-1.5 min-w-0">
        <span
          className="font-bold leading-none whitespace-nowrap"
          style={{ fontSize: textSize, letterSpacing: "-0.02em", fontFamily: "Sora, Manrope, sans-serif" }}
        >
          <span style={{ color: "#F8FAFC" }}>CRM</span>{" "}
          <span className="gradient-text">AI Systems</span>
        </span>
        {tagline && (
          <span
            className="leading-none"
            style={{ fontSize: 10, color: "#94A3B8", opacity: 0.75, letterSpacing: "0.04em" }}
          >
            {tagline}
          </span>
        )}
      </div>
    </div>
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
