import type { Satellite } from '@/types';
import { Logger } from '@/utils/logger';

export async function fetchLiveSatellites(): Promise<Satellite[]> {
    try {
        // Fetch from Python backend
        const response = await fetch('/api/satellites/');
        if (!response.ok) throw new Error('Failed to fetch satellites');
        const data = await response.json();

        // Ensure dates are parsed correctly
        return data.map((sat: any) => ({
            ...sat,
            lastUpdated: new Date(sat.lastUpdated)
        }));
    } catch (error) {
        Logger.error('Error fetching satellites:', error);
        // Fallback to empty or cached data if needed
        return [];
    }
}
