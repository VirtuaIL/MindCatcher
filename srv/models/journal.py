from sqlmodel import Field, SQLModel, Relationship
from datetime import datetime
from .user import User

def getDateTime() -> datetime:
    return datetime.now()

class Journal(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="user.id", index=True)
    date: datetime = Field(default_factory=getDateTime, index=True)
    content: str = Field()