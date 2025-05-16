
from ..main import app 
from fastapi import HTTPException
from ..database import SessionDep
from ..models.form import Form
from fastapi import status


@app.get("/form/{form_id}", response_model=Form)
def read_form(form_id: int, session: SessionDep):
    form = session.get(Form, form_id)
    if not form:
        raise HTTPException(status_code=404, detail="Form not found")
    return form


@app.post("/form/", response_model=Form, status_code=status.HTTP_201_CREATED)
def create_user(form: format, session: SessionDep) -> Form:
    session.add(form)
    session.commit()
    session.refresh(form)
    return form