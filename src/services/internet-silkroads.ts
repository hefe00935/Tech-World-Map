import type { InternetSilkroad } from '@/types';

/**
 * Internet Silkroads Service
 * Defines major terrestrial and strategic submarine data arteries
 * forming the global "digital silk road".
 */

const SILKROADS: InternetSilkroad[] = [
    {
        id: 'silkroad-1',
        name: 'Southern Silk Road',
        routeType: 'mixed',
        description: 'Connectivity route from Southeast Asia through India and the Middle East to Europe.',
        points: [
            [103.8, 1.3],   // Singapore
            [80.2, 13.0],   // Chennai
            [72.8, 19.0],   // Mumbai
            [55.3, 25.2],   // Dubai
            [43.5, 12.5],   // Bab el-Mandeb
            [32.5, 30.0],   // Suez
            [15.0, 37.0],   // Mediterranean
            [9.1, 43.1],    // Marseille
        ]
    },
    {
        id: 'silkroad-2',
        name: 'Northern Terrestrial Silk Road',
        routeType: 'terrestrial',
        description: 'High-capacity terrestrial route connecting East Asia to Europe via Central Asia.',
        points: [
            [116.4, 39.9],  // Beijing
            [87.6, 43.8],   // Urumqi
            [69.2, 41.3],   // Tashkent
            [37.6, 55.7],   // Moscow
            [21.0, 52.2],   // Warsaw
            [13.4, 52.5],   // Berlin
        ]
    },
    {
        id: 'silkroad-3',
        name: 'Trans-Pacific North',
        routeType: 'submarine',
        description: 'Major data artery connecting Tokyo to Seattle.',
        points: [
            [139.7, 35.7],  // Tokyo
            [180.0, 45.0],  // Mid-Pacific
            [-122.3, 47.6], // Seattle
        ]
    },
    {
        id: 'silkroad-4',
        name: 'Trans-Pacific South',
        routeType: 'submarine',
        description: 'Strategy artery from Southeast Asia to California via Taiwan and Guam.',
        points: [
            [121.5, 25.0],  // Taipei
            [144.7, 13.4],  // Guam
            [-157.8, 21.3], // Hawaii
            [-122.4, 37.7], // San Francisco
        ]
    },
    {
        id: 'silkroad-5',
        name: 'Trans-Atlantic Gateway',
        routeType: 'submarine',
        description: 'Primary high-capacity nexus between London/Paris and New York.',
        points: [
            [-74.0, 40.7],  // New York
            [-30.0, 50.0],  // Mid-Atlantic
            [-0.1, 51.5],   // London
            [2.3, 48.8],    // Paris
        ]
    },
    {
        id: 'silkroad-6',
        name: 'African Coastal Link',
        routeType: 'submarine',
        description: 'Regional backbone circuiting the African continent.',
        points: [
            [18.4, -33.9],  // Cape Town
            [5.5, -0.2],    // Accra
            [-17.4, 14.7],  // Dakar
            [-5.9, 35.8],   // Tangier
        ]
    }
];

export function getInternetSilkroads(): InternetSilkroad[] {
    return SILKROADS;
}
