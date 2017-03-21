export class Item {
    id: Number;
    title: String;
    details: String;
    videoLink: String;
    votes: string;
    user: {
        id: Number,
        name: String
    };
    constructor() {
        this.user = {id: 0, name: ''};
    }
}
