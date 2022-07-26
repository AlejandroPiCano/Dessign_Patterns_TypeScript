import { IEnemy } from "./IEnemy";

 export class OrcEnemy implements IEnemy{
    constructor(){}
    attack() {
        console.log("Orc attack.");
    }
    
}