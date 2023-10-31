import {User} from "../src/Users/User";
import {Pegasus} from "../src/Ponies/Pegasus";
import {NormalPony} from "../src/Ponies/NormalPony";
import {SuperPony} from "../src/Ponies/SuperPony";
import {PonyClub} from "../src/PonyClub";

describe('PonyClub getUserWithHighestExperience method', () => {
    const ponyClub = new PonyClub();
    const pony1 = new SuperPony("SuperPony1", 5, [0, 0]);
    const pony2 = new NormalPony("NormalPony1", 3, [0, 0]);
    const pony3 = new Pegasus("Pegasus1", 4, [1, 1]);

    const user1 = new User("Alice", new Date("2023-08-15"), [pony1]);
    const user2 = new User("Bob", new Date("2023-09-20"), [pony2, pony3]);

    ponyClub.users.push(user1, user2);

    test('should return the user with the highest pony experience', () => {
        const userWithHighestExperience = ponyClub.getUserWithHighestExperience();
        expect(userWithHighestExperience.username).toBe("Bob");
    });
});
