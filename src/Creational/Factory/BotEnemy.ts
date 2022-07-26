import { IEnemy } from "./IEnemy";


export default class BotEnemy implements IEnemy{
    takeDamage(): number {
        return 7;
    }
    attack() {
        console.log("Bot attack.");
    }
    
}