import { IEnemy } from "./IEnemy";

 export class OrcEnemy implements IEnemy{
    constructor(){}
     takeDamage(): number {
         return 5;
     }
    attack() {
        console.log("Orc attack.");
    }
    
}