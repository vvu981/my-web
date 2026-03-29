import type { SpeedInsightsProps } from '@vercel/speed-insights';

export interface SpeedInsightsConfig {
  enabled: boolean;
  sampleRate?: number;
}

export const SPEED_INSIGHTS_CONFIG: SpeedInsightsConfig = {
  enabled: process.env.NODE_ENV === 'production',
  sampleRate: 1.0,
};

export const getSpeedInsightsProps = (): SpeedInsightsProps => ({
  sampleRate: SPEED_INSIGHTS_CONFIG.sampleRate,
});
