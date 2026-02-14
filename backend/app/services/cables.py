from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()

class CableAdvisory(BaseModel):
    id: str
    cableId: str
    title: str
    severity: str
    description: str
    lat: float
    lon: float
    reported: str

@router.get("/advisories", response_model=List[CableAdvisory])
async def get_cable_advisories():
    # In prod, this would parse NGA warnings
    return [
        {
            "id": "mock-adv-1", 
            "cableId": "sea-me-we-5", 
            "title": "Red Sea Cut", 
             "severity": "fault",
            "description": "Cable severed due to anchor drag.",
            "lat": 15.0, 
            "lon": 42.0, 
            "reported": "2024-02-24T12:00:00Z"
        }
    ]
