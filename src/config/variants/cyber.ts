import type { PanelConfig, MapLayers, Feed } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Cyber-specific feeds
const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
    security: [
        { name: 'Krebs on Security', url: rss('https://krebsonsecurity.com/feed/') },
        { name: 'The Hacker News', url: rss('https://feeds.feedburner.com/TheHackersNews') },
        { name: 'Threatpost', url: rss('https://threatpost.com/feed/') },
        { name: 'BleepingComputer', url: rss('https://www.bleepingcomputer.com/feed/') },
        { name: 'Dark Reading', url: rss('https://www.darkreading.com/rss.xml') },
        { name: 'Schneier on Security', url: rss('https://www.schneier.com/feed/') },
        { name: 'Mandiant Blog', url: rss('https://www.mandiant.com/resources/blog/rss.xml') },
        { name: 'CISA Advisories', url: rss('https://www.cisa.gov/cybersecurity-advisories/all.xml') },
    ],
    infrastructure: [
        { name: 'Cloudflare Radar', url: rss('https://blog.cloudflare.com/tag/radar/rss/') },
        { name: 'Subsea World News', url: rss('https://www.subseaworldnews.com/feed/') },
        { name: 'Dyn Research', url: rss('https://archive.org/details/dynresearch') }, // Historical reference
    ]
};

export const DEFAULT_PANELS: Record<string, PanelConfig> = {
    map: { name: 'Cyber Threat Map', enabled: true, priority: 1 },
    'live-news': { name: 'Cyber Headlines', enabled: true, priority: 1 },
    security: { name: 'Security Intelligence', enabled: true, priority: 1 },
    infrastructure: { name: 'Infrastructure Updates', enabled: true, priority: 2 },
    monitors: { name: 'Asset Monitors', enabled: true, priority: 2 },
};

export const DEFAULT_MAP_LAYERS: MapLayers = {
    conflicts: false,
    bases: true,
    cables: true,
    pipelines: false,
    hotspots: true,
    ais: false,
    nuclear: false,
    irradiators: false,
    sanctions: false,
    weather: false,
    economic: false,
    waterways: false,
    outages: true,
    datacenters: true,
    protests: false,
    flights: false,
    military: false,
    natural: false,
    spaceports: false,
    minerals: false,
    fires: false,
    ucdpEvents: false,
    displacement: false,
    climate: false,
    startupHubs: false,
    cloudRegions: true,
    accelerators: false,
    techHQs: false,
    techEvents: false,
    cyberAttacks: true,
};

export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
    ...DEFAULT_MAP_LAYERS,
    cables: false,
    cloudRegions: false,
};

export const VARIANT_CONFIG: VariantConfig = {
    name: 'cyber',
    description: 'Cyber Monitör - Real-time global cyber threat intelligence',
    panels: DEFAULT_PANELS,
    mapLayers: DEFAULT_MAP_LAYERS,
    mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
