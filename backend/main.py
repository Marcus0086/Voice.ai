from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .ai.router import ai_router
from .config import get_settings

settings = get_settings()

app = FastAPI()

app.include_router(ai_router, prefix="/ai", tags=["ai"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}
