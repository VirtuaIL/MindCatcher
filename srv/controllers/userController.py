
from ..main import app 
from fastapi import HTTPException
from ..database import SessionDep
from ..models.user import User
from fastapi import status


@app.get("/users/{user_id}", response_model=User)
def read_user(user_id: int, session: SessionDep):
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@app.post("/users/", response_model=User, status_code=status.HTTP_201_CREATED)
def create_user(user: User, session: SessionDep) -> User:
    print("XDD")
    session.add(user)
    session.commit()
    session.refresh(user)
    return user