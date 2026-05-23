/**
 * Analytics helpers for Yandex.Metrika and Google Analytics 4.
 *
 * Loaded only when the corresponding VITE_* env vars are set:
 *   - VITE_YANDEX_METRIKA_ID
 *   - VITE_GA_MEASUREMENT_ID
 *
 * Unique visitors are tracked by the analytics providers themselves
 * (cookies / client id) — not by frontend code.
 */

export const YM_ID = import.meta.env.VITE_YANDEX_METRIKA_ID as string | undefined;
export const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    ym?: (id: string | number, action: string, ...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

let injected = false;

/** Inject analytics scripts once. Safe to call multiple times. */
export function initAnalytics() {
  if (injected || typeof window === "undefined") return;
  injected = true;

  if (YM_ID) {
    // Yandex.Metrika tag
    (function (m: any, e: Document, t: string, r: string, i: string) {
      m[i] =
        m[i] ||
        function (...args: unknown[]) {
          (m[i].a = m[i].a || []).push(args);
        };
      m[i].l = 1 * (new Date() as unknown as number);
      const k = e.createElement(t) as HTMLScriptElement;
      const a = e.getElementsByTagName(t)[0];
      k.async = true;
      k.src = r;
      a?.parentNode?.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    window.ym?.(YM_ID, "init", {
      defer: true,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: false,
    });
  }

  if (GA_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: true });
  }
}

/** Track a virtual page view (for SPA route changes). */
export function trackPageView(path?: string) {
  if (typeof window === "undefined") return;
  const url = path ?? window.location.pathname + window.location.search;

  if (YM_ID && window.ym) {
    window.ym(YM_ID, "hit", url);
  }
  if (GA_ID && window.gtag) {
    window.gtag("event", "page_view", { page_path: url });
  }
}

/** Fire when a lead form was submitted successfully. */
export function trackLeadSubmit(payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  if (YM_ID && window.ym) {
    window.ym(YM_ID, "reachGoal", "lead_form_submit", payload);
  }
  if (GA_ID && window.gtag) {
    window.gtag("event", "lead_form_submit", payload ?? {});
  }
}
