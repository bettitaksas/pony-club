import {Pony} from "./Pony";

export class Pegasus extends Pony {
    flyTo(x: number, y: number): void {
        console.log(`Pegasus ${this.name} flies to coordinates (${x}, ${y})`);
        this.position = [x, y];
    }
}
