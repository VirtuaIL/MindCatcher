
from datetime import date,datetime
from typing import List

from sqlmodel import func, select
from ..main import app 
from fastapi import HTTPException
from ..database import SessionDep
from ..models.journal import Journal
from fastapi import status


@app.get("/journals/{journal_id}", response_model=Journal)
def read_user(journal_id: int, session: SessionDep):
    journal = session.get(Journal, journal_id)
    if not journal:
        raise HTTPException(status_code=404, detail="Journal not found")
    return journal

@app.get("/journals/{user_id}/{date}", response_model=List[Journal])
def read_journals(user_id: int, date: date, session: SessionDep):

    statement = select(Journal).where(Journal.user_id == user_id).where(func.date(Journal.date) == date)
    journals = session.exec(statement).all()
    if not journals:
        raise HTTPException(status_code=404, detail="No journals found for that date/or user")
    return journals


@app.post("/journals/", response_model=Journal, status_code=status.HTTP_201_CREATED)
def create_user(journal: Journal, session: SessionDep) -> Journal:
    if not journal.user_id:
        raise HTTPException(status_code=400, detail="USER ID NEEDED")
    session.add(journal)
    session.commit()
    session.refresh(journal)
    return journal