import { IEnemy } from "../../Creational/Factory/IEnemy";


export abstract class EnemyDecorator implements IEnemy{
    protected enemy: IEnemy;

    constructor(enemy: IEnemy){
        this.enemy = enemy;
    }

    attack() {
        this.enemy.attack();
    }

    takeDamage(): number {
        return this.enemy.takeDamage();
    }    
}