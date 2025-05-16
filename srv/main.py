from typing import Union

from .app import app
from .database import create_db_and_tables

from .controllers import userController
from .controllers import journalController
from .controllers import newsController
from .controllers import formController


@app.on_event("startup")
def on_startup():
    create_db_and_tables()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}