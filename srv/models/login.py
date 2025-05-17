

from pydantic import BaseModel
from sqlmodel import SQLModel


class LoginRequest(SQLModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    user_id: int