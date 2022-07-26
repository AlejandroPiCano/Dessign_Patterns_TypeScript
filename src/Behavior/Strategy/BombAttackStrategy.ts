import { IStrategyPattern } from "./IStrategyPattern";

export class BombAttackStrategy implements IStrategyPattern{
    Execute() {
        console.log("Attack with bomb");
    }
    
}