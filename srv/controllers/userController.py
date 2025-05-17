from sqlmodel import Session, select
from ..main import app
from fastapi import HTTPException
from ..database import SessionDep
from ..models.user import User, UserRead
from fastapi import status
from ..hashPassword import get_password_hash


@app.get("/users/{user_id}", response_model=UserRead)
def read_user(user_id: int, session: SessionDep):
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@app.post("/users/", response_model=User, status_code=status.HTTP_201_CREATED)
def create_user(user: User, session: SessionDep) -> User:
    statement = select(User).where(User.username == user.username)
    existingUser = session.exec(statement).first()

    if existingUser:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already registered",
        )

    user.password = get_password_hash(user.password)
    session.add(user)
    session.commit()
    session.refresh(user)
    return user


@app.put(
    "/users/{user_id}",
    response_model=User,
    status_code=status.HTTP_200_OK,
)
def update_user(
    user_id: int,
    user: User,
    session: SessionDep,
) -> User:
    # 1) fetch existing
    existingUser = session.get(User, user_id)
    if not existingUser:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    
    user.id = user_id
    user.password = get_password_hash(user.password)
    merged = session.merge(user)
    # 3) persist changes
    session.commit()
    session.refresh(merged)
    return merged
