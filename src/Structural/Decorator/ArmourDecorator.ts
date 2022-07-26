import { OrcEnemy } from "../../Creational/Factory/OrcEnemy";
import { EnemyDecorator } from "./EnemyDecorator";

export class ArmourDecorator extends EnemyDecorator{        
    attack(): void {
        this.enemy.attack();
    }

    takeDamage(): number {
        return this.enemy.takeDamage() / 1.5;
    }


}