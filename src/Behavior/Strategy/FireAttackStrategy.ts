import { IStrategyPattern } from "./IStrategyPattern";

export class FireAttackStrategy implements IStrategyPattern{
    Execute() {
        console.log("Attack with fire");
    }
    
}