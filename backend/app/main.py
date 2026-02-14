from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.services.cables import router as cable_router
from app.services.attacks import router as attack_router
from app.services.traffic import router as traffic_router

app = FastAPI(title="Cyber Monitor API", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Ideally restrict to frontend origin in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(cable_router, prefix="/api/cables", tags=["cables"])
app.include_router(attack_router, prefix="/api/attacks", tags=["attacks"])
app.include_router(traffic_router, prefix="/api/traffic", tags=["traffic"])

@app.get("/health")
async def health_check():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
