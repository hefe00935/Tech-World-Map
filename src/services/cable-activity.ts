import type { CableAdvisory, RepairShip } from '@/types';

interface CableActivity {
  advisories: CableAdvisory[];
  repairShips: RepairShip[];
}





export async function fetchCableActivity(): Promise<CableActivity> {
  try {
    // Fetch from Python backend
    const response = await fetch('/api/cables/advisories');
    if (!response.ok) throw new Error('Failed to fetch cable advisories');
    const advisories = await response.json();

    // Transform backend data to frontend model if needed
    // The backend simulates NGA data, so we map it directly
    const cableAdvisories: CableAdvisory[] = advisories.map((adv: any) => ({
      ...adv,
      reported: new Date(adv.reported)
    }));

    return {
      advisories: cableAdvisories,
      repairShips: [] // Backend doesn't support ships yet
    };
  } catch (error) {
    console.error('Error fetching cable advisories:', error);
    return { advisories: [], repairShips: [] };
  }
}
