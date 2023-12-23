from langchain.chat_models import ChatOpenAI

from ...config import get_settings

app_settings = get_settings()


class QuestionAnsweringLLm:
    llm = None

    @classmethod
    def get_model(cls):
        if cls.llm is None:
            cls.llm = ChatOpenAI(
                streaming=True,
                openai_api_key=app_settings.openai_api_key,
                verbose=True,
                temperature=0.0,
                max_tokens=300,
            )
        return cls.llm
