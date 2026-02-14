// Configuration exports
// For variant-specific builds, set VITE_VARIANT environment variable
// VITE_VARIANT=tech → startups.worldviewer.app (tech-focused)
// VITE_VARIANT=cyber → cyber.worldviewer.app (cyber intelligence)
// VITE_VARIANT=full → worldviewer.app (geopolitical)

// Default to 'tech' for local/dev to prioritize the tech/infrastructure UI
export const SITE_VARIANT = import.meta.env.VITE_VARIANT || 'tech';
export const DEBUG = import.meta.env.DEV || import.meta.env.VITE_DEBUG === 'true';

// Shared base configuration (always included)
export {
  API_URLS,
  REFRESH_INTERVALS,
  MONITOR_COLORS,
  STORAGE_KEYS,
} from './variants/base';

// Market data (shared)
export { SECTORS, COMMODITIES, MARKET_SYMBOLS, CRYPTO_MAP } from './markets';

// Geo data (shared base)
export { UNDERSEA_CABLES, MAP_URLS } from './geo';

// Strategic Datacenters (shared)
export { STRATEGIC_DATA_CENTERS } from './strategic-datacenters';
// Backwards-compatible alias
export { STRATEGIC_DATA_CENTERS as AI_DATA_CENTERS } from './strategic-datacenters';

// Feeds configuration (shared functions, variant-specific data)
export {
  SOURCE_TIERS,
  getSourceTier,
  SOURCE_TYPES,
  getSourceType,
  getSourcePropagandaRisk,
  ALERT_KEYWORDS,
  ALERT_EXCLUSIONS,
  type SourceRiskProfile,
  type SourceType,
} from './feeds';

// Panel configuration - imported from panels.ts
export {
  DEFAULT_PANELS,
  DEFAULT_MAP_LAYERS,
  MOBILE_DEFAULT_MAP_LAYERS,
} from './panels';

// ============================================
// VARIANT-SPECIFIC EXPORTS
// Only import what's needed for each variant
// ============================================

// Full variant (geopolitical) - only included in full builds
// These are large data files that should be tree-shaken in tech builds
export {
  FEEDS,
  INTEL_SOURCES,
} from './feeds';

export {
  INTEL_HOTSPOTS,
  CONFLICT_ZONES,
  MILITARY_BASES,
  NUCLEAR_FACILITIES,
  APT_GROUPS,
  STRATEGIC_WATERWAYS,
  ECONOMIC_CENTERS,
  SANCTIONED_COUNTRIES,
  SPACEPORTS,
  CRITICAL_MINERALS,
} from './geo';

export { GAMMA_IRRADIATORS } from './irradiators';
export { PIPELINES, PIPELINE_COLORS } from './pipelines';
export { PORTS } from './ports';
export { MONITORED_AIRPORTS, FAA_AIRPORTS } from './airports';
export {
  ENTITY_REGISTRY,
  getEntityById,
  type EntityType,
  type EntityEntry,
} from './entities';

// Tech variant - these are included in tech builds
export { TECH_COMPANIES } from './tech-companies';
export { INTEL_RESEARCH_LABS } from './intel-labs';
export { STARTUP_ECOSYSTEMS } from './startup-ecosystems';
export {
  AI_REGULATIONS,
  REGULATORY_ACTIONS,
  COUNTRY_REGULATION_PROFILES,
  getUpcomingDeadlines,
  getRecentActions,
} from './strategic-regulations';
export {
  STARTUP_HUBS,
  ACCELERATORS,
  TECH_HQS,
  CLOUD_REGIONS,
  type StartupHub,
  type Accelerator,
  type TechHQ,
  type CloudRegion,
} from './tech-geo';
