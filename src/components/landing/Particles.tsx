import { useEffect, useRef } from "react";

type Props = {
  count?: number;
  className?: string;
};

export function Particles({ count = 36, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 640px)").matches;
    const n = reduced || mobile ? 0 : count;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    const ro = new ResizeObserver(() => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      resize();
    });
    ro.observe(canvas);

    const w = () => canvas.getBoundingClientRect().width;
    const h = () => canvas.getBoundingClientRect().height;

    const particles = Array.from({ length: n }, () => ({
      x: Math.random() * w(),
      y: Math.random() * h(),
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      a: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.5 ? "210" : "295",
    }));

    const draw = () => {
      const W = w();
      const H = h();
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle =
          p.hue === "210"
            ? `oklch(0.85 0.14 210 / ${p.a})`
            : `oklch(0.7 0.22 295 / ${p.a})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor =
          p.hue === "210" ? "oklch(0.78 0.14 210 / 0.6)" : "oklch(0.62 0.24 295 / 0.6)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    if (n > 0) raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      aria-hidden
    />
  );
}
