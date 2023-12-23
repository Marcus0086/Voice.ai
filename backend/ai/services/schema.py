from pydantic import BaseModel


class TextToSpeechRequest(BaseModel):
    text: str

class AnswerRequest(BaseModel):
    audio: str