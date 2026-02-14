from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
import random
from datetime import datetime

router = APIRouter()

class CyberAttack(BaseModel):
    id: str
    sourceCountry: str
    targetCountry: str
    sourceCoords: List[float]
    targetCoords: List[float]
    attackType: str
    severity: str
    timestamp: datetime

@router.get("/live", response_model=List[CyberAttack])
async def get_live_attacks():
    # In prod, fetch from Cloudflare/Netscout/Honeypots
    # For now, generate realistic-looking random traffic
    attacks = []
    countries: List[dict] = [
        {"code": "CN", "coords": [116.4, 39.9]},
        {"code": "US", "coords": [-77.0, 38.9]},
        {"code": "RU", "coords": [37.6, 55.7]},
        {"code": "IR", "coords": [51.4, 35.7]},
        {"code": "KP", "coords": [125.7, 39.0]},
        {"code": "UA", "coords": [30.5, 50.4]},
    ]
    
    types = ["ddos", "exploit", "malware", "phishing"]
    severities = ["low", "medium", "high", "critical"]
    
    for _ in range(random.randint(50, 95)): # Hyper-volume for real-time visualization
        src = random.choice(countries)
        tgt = random.choice([c for c in countries if c != src])
        
        # Add some jitter to coords to prevent perfectly overlapping arcs
        src_coords = [src["coords"][0] + random.uniform(-1.5, 1.5), src["coords"][1] + random.uniform(-1.5, 1.5)]
        tgt_coords = [tgt["coords"][0] + random.uniform(-1.5, 1.5), tgt["coords"][1] + random.uniform(-1.5, 1.5)]
        
        attacks.append({
            "id": f"atk-{random.randint(10000, 99999)}",
            "sourceCountry": src["code"],
            "targetCountry": tgt["code"],
            "sourceCoords": src_coords,
            "targetCoords": tgt_coords,
            "attackType": random.choice(types),
            "severity": random.choice(severities),
            "timestamp": datetime.now()
        })
    return attacks
