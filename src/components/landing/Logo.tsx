type Props = {
  size?: number;
  className?: string;
  title?: string;
};

/**
 * CRM AI Systems — brand mark.
 * Abstract digital core: rounded hex container, orbiting nodes connected to a
 * central AI core, suggesting CRM modules, neural links and system architecture.
 */
export function LogoMark({ size = 32, className, title = "CRM AI Systems" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <defs>
        <linearGradient id="lm-stroke" x1="4" y1="6" x2="44" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="55%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="lm-core" x1="18" y1="18" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="60%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <radialGradient id="lm-glow" cx="24" cy="24" r="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft inner glow */}
      <circle cx="24" cy="24" r="12" fill="url(#lm-glow)" />

      {/* rounded hex container — "system / architecture" */}
      <path
        d="M24 3.6 L40.2 12.4 a4 4 0 0 1 2.1 3.5 v16.2 a4 4 0 0 1-2.1 3.5 L24 44.4 a4 4 0 0 1-4 0 L7.8 35.6 a4 4 0 0 1-2.1-3.5 V15.9 a4 4 0 0 1 2.1-3.5 Z"
        stroke="url(#lm-stroke)"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="rgba(255,255,255,0.02)"
      />

      {/* connecting links — neural / CRM modules */}
      <g stroke="url(#lm-stroke)" strokeWidth="1.3" strokeLinecap="round" opacity="0.85">
        <line x1="24" y1="24" x2="24" y2="9.5" />
        <line x1="24" y1="24" x2="37" y2="16.5" />
        <line x1="24" y1="24" x2="37" y2="31.5" />
        <line x1="24" y1="24" x2="24" y2="38.5" />
        <line x1="24" y1="24" x2="11" y2="31.5" />
        <line x1="24" y1="24" x2="11" y2="16.5" />
      </g>

      {/* orbiting nodes */}
      <g fill="url(#lm-stroke)">
        <circle cx="24" cy="9.5" r="2" />
        <circle cx="37" cy="16.5" r="2" />
        <circle cx="37" cy="31.5" r="2" />
        <circle cx="24" cy="38.5" r="2" />
        <circle cx="11" cy="31.5" r="2" />
        <circle cx="11" cy="16.5" r="2" />
      </g>

      {/* AI core */}
      <circle cx="24" cy="24" r="5.2" fill="url(#lm-core)" />
      <circle cx="24" cy="24" r="5.2" fill="none" stroke="#F8FAFC" strokeOpacity="0.35" strokeWidth="0.8" />
      <circle cx="24" cy="24" r="1.6" fill="#F8FAFC" />
    </svg>
  );
}

export function Logo({
  className = "",
  markSize = 32,
  textClassName = "text-base",
  compact = false,
}: {
  className?: string;
  markSize?: number;
  textClassName?: string;
  compact?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={markSize} className="drop-shadow-[0_4px_18px_rgba(59,130,246,0.35)]" />
      {!compact && (
        <span className={`font-semibold tracking-tight leading-none ${textClassName}`}>
          <span className="text-foreground">CRM</span>{" "}
          <span className="gradient-text">AI Systems</span>
        </span>
      )}
    </span>
  );
}
