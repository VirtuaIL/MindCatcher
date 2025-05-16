export class UserData {
    id: number;
    username: string;
    password: string;
    streak:number;
    streak_record:number;

    constructor(id:number, username:string, password:string, streak:number, streak_record:number) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.streak = streak;
        this.streak_record = streak_record;
    }
}

export default UserData;
