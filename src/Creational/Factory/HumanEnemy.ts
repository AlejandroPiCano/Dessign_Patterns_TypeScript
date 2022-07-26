import { IEnemy } from "./IEnemy";


export default class HumanEnemy implements IEnemy{
    attack() {
        console.log("Human attack.");
    }
    takeDamage(): number {
        return 10;
    }
}
