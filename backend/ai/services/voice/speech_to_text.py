import os

from openai import OpenAI
from fastapi import UploadFile

from ....config import get_settings

settings = get_settings()
os.environ["OPENAI_API_KEY"] = settings.openai_api_key

client = OpenAI()


async def handle_speech_to_text(file: UploadFile) -> str:
    audio_file_bytes = await file.read()
    audio_file = (file.filename, audio_file_bytes, file.content_type)
    transcript = client.audio.transcriptions.create(model="whisper-1", file=audio_file)
    return transcript.text
