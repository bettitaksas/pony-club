import {User} from "./Users/User";
import {Pony} from "./Ponies/Pony";

export class PonyClub {
    users: User[];

    constructor() {
        this.users = [];
    }

    listPoniesAtPosition(position: [number, number]): Pony[] {
        return this.users
            .flatMap((user) => user.ponies)
            .filter((pony) => pony.position[0] === position[0] && pony.position[1] === position[1]);
    }

    getUserWithHighestExperience(): User {
        return this.users.reduce((prev, current) => {
            const prevMax = prev.ponies.reduce((acc, pony) => acc + pony.experienceLevel, 0);
            const currentMax = current.ponies.reduce((acc, pony) => acc + pony.experienceLevel, 0);
            return prevMax > currentMax ? prev : current;
        });
    }
}
