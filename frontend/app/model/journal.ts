export class JournalData {
    date: string;
    id: number;
    user_id: number;
    content: string[];
    constructor(id: number, user_id: number, content: [string], date: string) {
        this.id = id;
        this.user_id = user_id;
        this.content = content;
        this.date = date;
    }
}
