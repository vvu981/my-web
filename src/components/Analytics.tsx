'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

// Configuración centralizada
const ANALYTICS_CONFIG = {
  provider: 'vercel' as const,
  enabled: true,
};

type AnalyticsProvider = typeof ANALYTICS_CONFIG.provider;

const ANALYTICS_PROVIDERS: Record<AnalyticsProvider, React.ComponentType> = {
  vercel: VercelAnalytics,
  // google: GoogleAnalytics,
  // mixpanel: MixpanelAnalytics, ...
};

export function Analytics() {
  if (!ANALYTICS_CONFIG.enabled) {
    return null;
  }

  const AnalyticsComponent = ANALYTICS_PROVIDERS[ANALYTICS_CONFIG.provider];

  if (!AnalyticsComponent) {
    console.warn(`Analytics provider "${ANALYTICS_CONFIG.provider}" not supported`);
    return null;
  }

  return <AnalyticsComponent />;
}
