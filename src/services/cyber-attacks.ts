import type { CyberAttack } from '@/types';

// Cyber attack types and categories
const ATTACK_TYPES: Array<CyberAttack['attackType']> = ['ddos', 'malware', 'phishing', 'exploit'];
const SEVERITIES: Array<CyberAttack['severity']> = ['low', 'medium', 'high', 'critical'];

// Major cyber power/target coordinates for simulation
// In a real app, this would come from an API
const CYBER_HUBS: Record<string, [number, number]> = {
    'US': [-95, 38],
    'CN': [104, 35],
    'RU': [105, 60],
    'IR': [53, 32],
    'KP': [127, 40],
    'UA': [31, 48],
    'IL': [34, 31],
    'GB': [-2, 54],
    'DE': [10, 51],
    'FR': [2, 46],
    'JP': [138, 36],
    'KR': [127, 36],
    'IN': [78, 20],
    'BR': [-55, -10],
    'AU': [133, -25],
};

let attackCounter = 0;

/**
 * Simulates a live cyber attack feed.
 * In production, this would fetch from a real-time threat intelligence API.
 */
export function generateSimulatedAttacks(count: number = 5): CyberAttack[] {
    const attacks: CyberAttack[] = [];
    const countries = Object.keys(CYBER_HUBS);
    const now = new Date();

    for (let i = 0; i < count; i++) {
        const source = countries[Math.floor(Math.random() * countries.length)]!;
        let target = countries[Math.floor(Math.random() * countries.length)]!;

        // Ensure target is different from source
        while (target === source) {
            target = countries[Math.floor(Math.random() * countries.length)]!;
        }

        attacks.push({
            id: `attack-${Date.now()}-${attackCounter++}`,
            sourceCountry: source,
            targetCountry: target,
            sourceCoords: CYBER_HUBS[source]!,
            targetCoords: CYBER_HUBS[target]!,
            attackType: ATTACK_TYPES[Math.floor(Math.random() * ATTACK_TYPES.length)]!,
            severity: SEVERITIES[Math.floor(Math.random() * SEVERITIES.length)]!,
            timestamp: new Date(now.getTime() - Math.random() * 300000), // Within last 5 mins
        });
    }

    return attacks;
}

export async function fetchLiveCyberAttacks(): Promise<CyberAttack[]> {
    try {
        const response = await fetch('/api/attacks/live');
        if (!response.ok) throw new Error('Failed to fetch attacks');
        const data = await response.json();

        return data.map((atk: any) => ({
            ...atk,
            timestamp: new Date(atk.timestamp)
        }));
    } catch (error) {
        console.error('Error fetching cyber attacks:', error);
        // Fallback to simulation if backend is down
        console.warn('Backend unavailable, switching to simulation mode');
        return generateSimulatedAttacks(50);
    }
}
