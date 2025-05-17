from typing import List
from pydantic import BaseModel
from sqlmodel import Field, SQLModel, Relationship

from .journal import Journal
from .form import Form

class User(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    username: str = Field(index=True)
    password: str = Field(index=True)
    streak: int = Field(default=0)
    streak_record:int = Field(default=0)

    forms: List["Form"] = Relationship(back_populates="user")
    journals: List["Journal"] = Relationship(back_populates="user")

class UserRead(BaseModel):
    id: int
    username: str
    password: str
    streak: int
    streak_record:int

    forms: List["Form"] = []
    journals: List["Journal"] = []
