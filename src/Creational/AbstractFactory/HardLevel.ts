import { ILevel } from "./ILevel";

export default class HardLevel implements ILevel
{
    ConstructLevel(): string
    {
       return "This is the hard level";
    }
}