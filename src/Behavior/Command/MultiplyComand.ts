import { ICommand } from "./ICommand";

export class MultiplyComand implements ICommand{
    private readonly multiplier : number;
    private multiplyResult : number = 1;

    constructor(multiplier: number){
        this.multiplier = multiplier;
    }

    execute(value: number) : number {
       this.multiplyResult = this.multiplier * value;    

       return this.multiplyResult;
    }

    undo() {
        return this.multiplyResult / this.multiplier;
    }
}