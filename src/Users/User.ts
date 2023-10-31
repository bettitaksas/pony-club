import {Pony} from "../Ponies/Pony";

export class User {
    username: string;
    registrationDate: Date;
    ponies: Pony[];

    constructor(username: string, registrationDate: Date, ponies: Pony[]) {
        this.username = username;
        this.registrationDate = registrationDate;
        this.ponies = ponies;
    }
}
