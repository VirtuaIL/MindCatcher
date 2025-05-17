export class NewsData {
    id: number;
    author: string;
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    content: string;
    constructor(id: number, author: string, title: string, description: string, url: string, publishedAt: string, content: string) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.description = description;
        this.url = url;
        this.publishedAt = publishedAt;
        this.content = content;
    }
}

export default NewsData;

