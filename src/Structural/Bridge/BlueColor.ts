import { IColor } from "./IColor";

export class BlueColor implements IColor{
    getColor(): string {
        return "blue";
    }
}