from fastapi import APIRouter, HTTPException, Depends, UploadFile, Request
from fastapi.responses import StreamingResponse
from io import BytesIO

from .services.voice.text_to_speech import handle_text_to_speech
from .services.voice.speech_to_text import handle_speech_to_text
from .services.schema import TextToSpeechRequest

ai_router = APIRouter()


@ai_router.get("/text-to-speech")
async def text_to_speech(request: TextToSpeechRequest = Depends()):
    response = await handle_text_to_speech(request.text)
    if response is None:
        raise HTTPException(status_code=500, detail="Internal Server Error")

    async def content_generator():
        for chunk in response.iter_bytes():
            yield chunk

    return StreamingResponse(content_generator(), media_type="audio/wav")


@ai_router.post("/speech-to-text")
async def speech_to_text(request: Request):
    audio_data = await request.body()
    file = UploadFile(filename="audio.mp3", file=BytesIO(audio_data))
    response = await handle_speech_to_text(file)
    if response is None:
        raise HTTPException(status_code=500, detail="Internal Server Error")
    return response
