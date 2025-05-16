from sqlmodel import select
from ..main import app
from fastapi import HTTPException
from ..models.news import News

def getPositiveNews() -> News:
    x = News(
        author="Marcin Najman",
        title="Marcin najman jednak nie zjadł pomarańczę",
        description="Marcina najman wziął i zjadł pomarańczę\nMarcina najman wziął i zjadł pomarańczę\nMarcina najman wziął i zjadł pomarańczę\nMarcina najman wziął i zjadł pomarańczę\n",
        url="https:://google.com",
        urlToImage="",
        publishedAt="2025-12-12 21:37",
        content="Marcin najman zjadł pomarańczę"
    )
    return x

@app.get("/news/", response_model=News)
def get_news():
    news = getPositiveNews()
    if not news:
        raise HTTPException(status_code=404, detail="Cannot retrieve news right now")
    return news

