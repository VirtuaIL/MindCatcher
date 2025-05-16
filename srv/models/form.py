
from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel
from sqlmodel import Field, Relationship, SQLModel


class Form(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id")
    date: datetime = Field(default_factory=lambda: datetime.now())
    mood_value: int = Field()
    sleep_value: int = Field()
    feelings: list["Feeling"] = Relationship(back_populates="form")
    user: Optional["User"] = Relationship(back_populates="forms")

class Feeling(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str         = Field(index=True)  # e.g. "hungry", "tired", …
    value: bool       = Field(default=False)
    
    # back-reference to the parent form
    form_id: int  | None     = Field(default=None, foreign_key="form.id", index=True)
    form: Optional["Form"] = Relationship(back_populates="feelings")

class FeelingCreate(BaseModel):
    name: str
    value: bool

class FormCreate(BaseModel):
    user_id: int
    mood_value: int
    sleep_value: int
    feelings: List[FeelingCreate]


class FeelingRead(BaseModel):
    name:    str
    value:   bool

    class Config:
        orm_mode = True

# 1b) A schema for serializing forms, including nested feelings
class FormRead(BaseModel):
    id:          int
    user_id:     int
    date:        datetime
    mood_value:  int
    sleep_value: int
    feelings:    List[FeelingRead] = []

    class Config:
        orm_mode = True