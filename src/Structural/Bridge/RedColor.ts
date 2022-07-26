import { IColor } from "./IColor";

export class RedColor implements IColor{
    getColor(): string {
        return "red";
    }
}