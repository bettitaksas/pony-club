import {Pony} from "./Pony";

export class SuperPony extends Pony {
    flyTo(x: number, y: number): void {
        console.log(`SuperPony ${this.name} flies to coordinates (${x}, ${y})`);
        this.position = [x, y];
    }

    doMagic(): void {
        console.log(`SuperPony ${this.name} performs a super magical trick!`);
        this.experienceLevel++;
        this.name += "#";
    }
}
