from sqlmodel import Field, SQLModel, Relationship

class News(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    author: str | None = Field(index=True)
    title: str | None = Field(index=True)
    description: str | None = Field()
    url: str | None = Field()
    publishedAt: str | None = Field()
    content: str | None = Field()