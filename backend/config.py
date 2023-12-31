from functools import lru_cache

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    env: str = "development"
    openai_api_key: str = ""

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings():
    return Settings()
