export class FormRequest {
    user_id: number;
    mood_value: number;
    sleep_value: number;
    feelings: [{name: string, value: boolean}];
    constructor(user_id: number, mood_value: number, sleep_value: number, feelings: [{name: string, value: boolean}]) {
        this.user_id = user_id;
        this.mood_value = mood_value;
        this.sleep_value = sleep_value;
        this.feelings = feelings;
    }
}
