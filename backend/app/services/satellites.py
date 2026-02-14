from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Literal
from skyfield.api import load, Topos, EarthSatellite
import random
from datetime import datetime

router = APIRouter()

class Satellite(BaseModel):
    id: str
    name: str
    lat: float
    lon: float
    alt: float
    type: Literal['comm', 'spy', 'scientific', 'other']
    owner: str
    lastUpdated: datetime

# In-memory cache for demo purposes
# In prod, this would be populated by a background scheduler fetching CelesTrak
SATELLITES_CACHE = [
    {"id": "sat-01", "name": "Starlink-1024", "lat": 34.0, "lon": -118.0, "alt": 550, "type": "comm", "owner": "SpaceX"},
    {"id": "sat-02", "name": "USA-290", "lat": 48.0, "lon": 44.0, "alt": 400, "type": "spy", "owner": "USA"},
]

@router.get("/", response_model=List[Satellite])
async def get_satellites():
    # Simulate movement
    current_time = datetime.now()
    results = []
    for sat in SATELLITES_CACHE:
        # Simple random walk for demo
        # Real implementation uses SGP4 propagation
        lat_shift = (random.random() - 0.5) * 2
        lon_shift = (random.random() - 0.5) * 2
        
        results.append(Satellite(
            id=sat["id"],
            name=sat["name"],
            lat=sat["lat"] + lat_shift,
            lon=sat["lon"] + lon_shift,
            alt=sat["alt"],
            type=sat["type"],
            owner=sat["owner"],
            lastUpdated=current_time
        ))
    return results

@router.post("/refresh")
async def refresh_tle_data():
    # Placeholder for CelesTrak fetch
    return {"status": "refresh_initiated"}
