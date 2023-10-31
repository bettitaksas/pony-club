import {Direction} from "./Direction";

export class Pony {
    name: string;
    experienceLevel: number;
    position: [number, number];

    constructor(name: string, experienceLevel: number, position: [number, number]) {
        this.name = name;
        this.experienceLevel = experienceLevel;
        this.position = position;
    }

    walk(direction: Direction): void {
        console.log(`Pony ${this.name} walks 1 unit to the ${direction}`);
    }

    rename(newName: string): void {
        this.name = newName;
    }
}
