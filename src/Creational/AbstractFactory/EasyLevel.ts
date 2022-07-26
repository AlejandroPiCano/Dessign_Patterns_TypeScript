import { ILevel } from "./ILevel";

export default class EasyLevel implements ILevel
{
    ConstructLevel(): string
    {
       return "This is the easy level";
    }
}