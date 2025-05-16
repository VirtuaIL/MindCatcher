
from ..main import app 
from fastapi import HTTPException
from ..database import SessionDep
from ..models.journal import Journal
from fastapi import status


@app.get("/journals/{journal_id}", response_model=Journal)
def read_user(journal_id: int, session: SessionDep):
    journal = session.get(Journal, journal_id)
    if not Journal:
        raise HTTPException(status_code=404, detail="Journal not found")
    return Journal


@app.post("/journals/", response_model=Journal, status_code=status.HTTP_201_CREATED)
def create_user(journal: Journal, session: SessionDep) -> Journal:
    print("XDD")
    session.add(journal)
    session.commit()
    session.refresh(journal)
    return journal