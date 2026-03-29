'use client';

import { SpeedInsights as VercelSpeedInsights } from '@vercel/speed-insights/next';
import { SPEED_INSIGHTS_CONFIG, getSpeedInsightsProps } from './speedInsights.config';

/**
 * SpeedInsights Component
 * 
 * Componente encargado de monitorear el rendimiento de la aplicación.
 * Implementa el patrón Provider para permitir extensibilidad futura.
 * 
 * Responsabilidades:
 * - Inicializar Speed Insights solo cuando está habilitado
 * - Aplicar configuración centralizada
 * - Mantener la lógica de rendimiento separada del resto de la app
 */
export function SpeedInsights() {
  if (!SPEED_INSIGHTS_CONFIG.enabled) {
    return null;
  }

  try {
    const props = getSpeedInsightsProps();
    return <VercelSpeedInsights {...props} />;
  } catch (error) {
    console.error('Error initializing Speed Insights:', error);
    return null;
  }
}
