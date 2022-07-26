import { IComponent } from "./IComponent";

export class Leg implements IComponent{
    operation(): void {
        console.log("Move Leg");
    }
}