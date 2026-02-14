from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class RegionTraffic(BaseModel):
    region: str
    lat: float
    lon: float
    density: float  # 0.1 to 1.0

@router.get("/density", response_model=List[RegionTraffic])
async def get_traffic_density():
    # Mock traffic density peaks
    return [
        {"region": "na-east", "lat": 40.7, "lon": -74.0, "density": 0.95},
        {"region": "eu-west", "lat": 51.5, "lon": -0.1, "density": 0.88},
        {"region": "asia-east", "lat": 35.6, "lon": 139.6, "density": 0.92},
    ]
