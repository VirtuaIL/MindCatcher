from sqlmodel import Session, select
from ..main import app 
from fastapi import Depends, HTTPException
from ..database import SessionDep
from ..models.form import Feeling, Form, FormCreate, FormRead
from sqlalchemy.orm import selectinload
from fastapi import status


@app.get("/forms/{form_id}", response_model=FormRead)
def read_form(form_id: int, session: SessionDep):
    stmt = (
        select(Form)
        .where(Form.id == form_id)
        .options(selectinload(Form.feelings))
    )
    form = session.exec(stmt).first()
    if not form:
        raise HTTPException(404, "Form not found")
    return form

@app.post(
    "/forms/",
    response_model=FormRead,
    status_code=status.HTTP_201_CREATED,
)
def create_form(
    form_in: FormCreate,
    session: SessionDep,
) -> FormRead:
    # 1) Create and persist the Form row
    form = Form(
        user_id=form_in.user_id,
        mood_value=form_in.mood_value,
        sleep_value=form_in.sleep_value,
    )
    session.add(form)
    session.commit()
    session.refresh(form)  # now form.id is available

    # 2) Create and persist each Feeling linked to form.id
    for f in form_in.feelings:
        feeling = Feeling(
            name=f.name,
            value=f.value,
            form_id=form.id,
        )
        session.add(feeling)
    session.commit()

    # 3) Re-load the Form with feelings eagerly loaded
    stmt = (
        select(Form)
        .where(Form.id == form.id)
        .options(selectinload(Form.feelings))
    )
    created = session.exec(stmt).one_or_none()
    if not created:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to load created form."
        )

    # 4) Return the fully populated FormRead
    return created