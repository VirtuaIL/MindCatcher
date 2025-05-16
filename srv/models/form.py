
from datetime import datetime
from sqlmodel import Field, SQLModel

from .feelings import Feelings


class Form(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id", index=True)
    date: datetime = Field(default_factory=lambda: datetime.now())
    mood_value : int = Field()
    sleep_value : int = Field()
    feelings: Feelings = Field()