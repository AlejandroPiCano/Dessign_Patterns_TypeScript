import { IComponent } from "./IComponent";

export class Head implements IComponent{
    operation(): void {
        console.log("Move Head");
    }
}