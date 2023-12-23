from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import StreamingResponse

from .services.answer import handle_audio_answer

ai_router = APIRouter()


@ai_router.post("/answer")
async def answer(request: Request) -> StreamingResponse:
    response = await handle_audio_answer(request)
    if response is None:
        raise HTTPException(status_code=500, detail="Internal Server Error")

    async def content_generator():
        for chunk in response.iter_bytes():
            yield chunk

    return StreamingResponse(content_generator(), media_type="audio/wav")
