import { IComponent } from "./IComponent";

export class Tail implements IComponent{
    operation(): void {
        console.log("Move Tail");
    }
}