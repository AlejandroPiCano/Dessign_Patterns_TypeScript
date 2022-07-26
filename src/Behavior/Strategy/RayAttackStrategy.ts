import { IStrategyPattern } from "./IStrategyPattern";

export class RayAttackStrategy implements IStrategyPattern{
    Execute() {
        console.log("Attack with ray");
    }
    
}