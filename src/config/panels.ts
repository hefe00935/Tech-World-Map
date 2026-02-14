import type { PanelConfig, MapLayers } from '@/types';

const SITE_VARIANT = import.meta.env.VITE_VARIANT || 'tech';

// ============================================
// FULL VARIANT (Geopolitical)
// ============================================
// Panel order matters! First panels appear at top of grid.
// Desired order: live-news, AI Insights, AI Strategic Posture, cii, strategic-risk, then rest
const FULL_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Map', enabled: true, priority: 1 },
  'live-news': { name: 'Live News', enabled: true, priority: 1 },
  insights: { name: 'AI Insights', enabled: true, priority: 1 },
  'strategic-posture': { name: 'AI Strategic Posture', enabled: true, priority: 1 },
  cii: { name: 'Country Instability', enabled: true, priority: 1 },
  'strategic-risk': { name: 'Strategic Risk Overview', enabled: true, priority: 1 },
  intel: { name: 'Intel Feed', enabled: true, priority: 1 },
  'gdelt-intel': { name: 'Live Intelligence', enabled: true, priority: 1 },
  cascade: { name: 'Infrastructure Cascade', enabled: true, priority: 1 },
  politics: { name: 'World News', enabled: true, priority: 1 },
  middleeast: { name: 'Middle East', enabled: true, priority: 1 },
  africa: { name: 'Africa', enabled: true, priority: 1 },
  latam: { name: 'Latin America', enabled: true, priority: 1 },
  asia: { name: 'Asia-Pacific', enabled: true, priority: 1 },
  energy: { name: 'Energy & Resources', enabled: true, priority: 1 },
  gov: { name: 'Government', enabled: true, priority: 1 },
  thinktanks: { name: 'Think Tanks', enabled: true, priority: 1 },
  polymarket: { name: 'Predictions', enabled: true, priority: 1 },
  commodities: { name: 'Commodities', enabled: true, priority: 1 },
  markets: { name: 'Markets', enabled: true, priority: 1 },
  economic: { name: 'Economic Indicators', enabled: true, priority: 1 },
  finance: { name: 'Financial', enabled: true, priority: 1 },
  tech: { name: 'Technology', enabled: true, priority: 2 },
  crypto: { name: 'Crypto', enabled: true, priority: 2 },
  heatmap: { name: 'Sector Heatmap', enabled: true, priority: 2 },
  ai: { name: 'AI/ML', enabled: true, priority: 2 },
  layoffs: { name: 'Layoffs Tracker', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
  'satellite-fires': { name: 'Fires', enabled: true, priority: 2 },
  'macro-signals': { name: 'Market Radar', enabled: true, priority: 2 },
  'etf-flows': { name: 'BTC ETF Tracker', enabled: true, priority: 2 },
  stablecoins: { name: 'Stablecoins', enabled: true, priority: 2 },
  'runtime-config': { name: 'Desktop Configuration', enabled: true, priority: 2 },
  'ucdp-events': { name: 'UCDP Conflict Events', enabled: false, priority: 2 },
  displacement: { name: 'UNHCR Displacement', enabled: false, priority: 2 },
  climate: { name: 'Climate Anomalies', enabled: false, priority: 2 },
  'population-exposure': { name: 'Population Exposure', enabled: false, priority: 2 },
};

const FULL_MAP_LAYERS: MapLayers = {
  // Geopolitical/default full site layers
  conflicts: true,
  hotspots: true,
  bases: true,
  ais: true,
  nuclear: true,
  military: true,
  natural: true,
  irradiators: true,
  sanctions: true,
  datacenters: true,
  silkroads: true,
  protests: true,
  flights: true,
  spaceports: true,
  displacement: true,
  climate: true,
  startupHubs: true,
  cloudRegions: true,
  accelerators: true,
  techHQs: true,
  techEvents: true,
  pipelines: true,
  cables: true,
  outages: true,
  economic: true,
  fires: true,
  ucdpEvents: true,
  waterways: true,
  minerals: true,
};

const FULL_MOBILE_MAP_LAYERS: MapLayers = {
  conflicts: true,
  hotspots: true,
  bases: false,
  ais: false,
  nuclear: false,
  sanctions: true,
  natural: true,
  cables: true,
  pipelines: true,
  irradiators: true,
  economic: true,
  waterways: true,
  datacenters: true,
  protests: false,
  flights: false,
  military: false,
  spaceports: false,
  ucdpEvents: true,
  displacement: true,
  climate: true,
  startupHubs: true,
  cloudRegions: true,
  accelerators: true,
  techHQs: true,
  techEvents: true,
  outages: true,
  silkroads: true,
  minerals: true,
  fires: true,
};

// ============================================
// TECH VARIANT (Tech/AI/Startups)
// ============================================
const TECH_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Tech Map', enabled: true, priority: 1 },
  'live-news': { name: 'Tech Headlines', enabled: true, priority: 1 },
  insights: { name: 'AI Insights', enabled: true, priority: 1 },
  ai: { name: 'AI/ML News', enabled: true, priority: 1 },
  tech: { name: 'Technology', enabled: true, priority: 1 },
  startups: { name: 'Startups & VC', enabled: true, priority: 1 },
  vcblogs: { name: 'VC Insights & Essays', enabled: true, priority: 1 },
  silkroads: { name: 'Tech Silkroads', enabled: true, priority: 1 },
  regionalStartups: { name: 'Global Startup News', enabled: true, priority: 1 },
  unicorns: { name: 'Unicorn Tracker', enabled: true, priority: 1 },
  accelerators: { name: 'Accelerators & Demo Days', enabled: true, priority: 1 },
  security: { name: 'Cybersecurity', enabled: true, priority: 1 },
  policy: { name: 'AI Policy & Regulation', enabled: true, priority: 1 },
  regulation: { name: 'AI Regulation Dashboard', enabled: true, priority: 1 },
  layoffs: { name: 'Layoffs Tracker', enabled: true, priority: 1 },
  markets: { name: 'Tech Stocks', enabled: true, priority: 2 },
  finance: { name: 'Financial News', enabled: true, priority: 2 },
  crypto: { name: 'Crypto', enabled: true, priority: 2 },
  hardware: { name: 'Semiconductors & Hardware', enabled: true, priority: 2 },
  cloud: { name: 'Cloud & Infrastructure', enabled: true, priority: 2 },
  dev: { name: 'Developer Community', enabled: true, priority: 2 },
  github: { name: 'GitHub Trending', enabled: true, priority: 1 },
  ipo: { name: 'IPO & SPAC', enabled: true, priority: 2 },
  polymarket: { name: 'Tech Predictions', enabled: true, priority: 2 },
  funding: { name: 'Funding & VC', enabled: true, priority: 1 },
  producthunt: { name: 'Product Hunt', enabled: true, priority: 1 },
  events: { name: 'Tech Events', enabled: true, priority: 1 },
  'service-status': { name: 'Service Status', enabled: true, priority: 2 },
  'runtime-config': { name: 'Desktop Configuration', enabled: true, priority: 2 },
  economic: { name: 'Economic Indicators', enabled: true, priority: 2 },
  'tech-readiness': { name: 'Tech Readiness Index', enabled: true, priority: 1 },
  'macro-signals': { name: 'Market Radar', enabled: true, priority: 2 },
  'etf-flows': { name: 'BTC ETF Tracker', enabled: true, priority: 2 },
  stablecoins: { name: 'Stablecoins', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
};

const TECH_MAP_LAYERS: MapLayers = {
  // Tech-focused layers
  cables: true,
  datacenters: true,
  outages: true,
  cloudRegions: true,
  startupHubs: true,
  techHQs: true,
  techEvents: true,
  cyberAttacks: true,
  silkroads: true,
  // Useful contextual layers
  natural: true,
  weather: true,
  economic: true,
  // Disable geopolitical/worldviewer layers in tech variant
  conflicts: false,
  hotspots: false,
  bases: false,
  pipelines: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  waterways: false,
  protests: false,
  flights: false,
  military: false,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  accelerators: false,
};

const TECH_MOBILE_MAP_LAYERS: MapLayers = {
  cables: true,
  datacenters: true,
  outages: true,
  cloudRegions: true,
  startupHubs: true,
  techHQs: true,
  techEvents: true,
  cyberAttacks: true,
  silkroads: true,
  natural: true,
  weather: true,
  economic: true,
  // disable heavy geopolitical layers on mobile
  conflicts: false,
  hotspots: false,
  bases: false,
  pipelines: false,
  ais: false,
  nuclear: false,
  protests: false,
  military: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  accelerators: false,
};

// ============================================
// VARIANT-AWARE EXPORTS
// ============================================
export const DEFAULT_PANELS =
  SITE_VARIANT === 'tech' ? TECH_PANELS :
    SITE_VARIANT === 'cyber' ? (await import('./variants/cyber')).DEFAULT_PANELS :
      FULL_PANELS;

export const DEFAULT_MAP_LAYERS =
  SITE_VARIANT === 'tech' ? TECH_MAP_LAYERS :
    SITE_VARIANT === 'cyber' ? (await import('./variants/cyber')).DEFAULT_MAP_LAYERS :
      FULL_MAP_LAYERS;

export const MOBILE_DEFAULT_MAP_LAYERS =
  SITE_VARIANT === 'tech' ? TECH_MOBILE_MAP_LAYERS :
    SITE_VARIANT === 'cyber' ? (await import('./variants/cyber')).MOBILE_DEFAULT_MAP_LAYERS :
      FULL_MOBILE_MAP_LAYERS;

export const MONITOR_COLORS = [
  '#44ff88',
  '#ff8844',
  '#4488ff',
  '#ff44ff',
  '#ffff44',
  '#ff4444',
  '#44ffff',
  '#88ff44',
  '#ff88ff',
  '#88ffff',
];

export const STORAGE_KEYS = {
  panels: 'worldmonitor-panels',
  monitors: 'worldmonitor-monitors',
  mapLayers: 'worldmonitor-layers',
  disabledFeeds: 'worldmonitor-disabled-feeds',
} as const;
