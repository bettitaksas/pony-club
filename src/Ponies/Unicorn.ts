import {Pony} from "./Pony";

export class Unicorn extends Pony {
    doMagic(): void {
        console.log(`Unicorn ${this.name} performs a magical trick!`);
        this.experienceLevel++;
        this.name += "*";
    }
}
