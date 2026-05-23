import { useEffect } from "react";
import { GA_ID, YM_ID, initAnalytics, trackPageView } from "@/lib/analytics";

/**
 * Mounts analytics scripts (Yandex.Metrika, GA4) on the client.
 * Renders nothing. No-op when no analytics IDs are configured.
 */
export function AnalyticsProvider() {
  useEffect(() => {
    if (!YM_ID && !GA_ID) return;
    initAnalytics();
    trackPageView();
  }, []);

  return null;
}
