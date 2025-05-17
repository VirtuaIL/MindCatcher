

from fastapi import HTTPException, status
from sqlmodel import select

from ..models.user import User
from ..database import SessionDep
from ..models.login import LoginResponse, LoginRequest
from ..main import app

@app.post("/login/", response_model = LoginResponse)
def login( request: LoginRequest,
    session: SessionDep,):

    statement = (select(User).where(User.username == request.username))

    user = session.exec(statement).one_or_none()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found."
        )
    
    if(not user.password == request.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect password"
        )
    
    return LoginResponse(user_id=user.id)