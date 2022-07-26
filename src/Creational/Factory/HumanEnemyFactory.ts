import HumanEnemy from "./HumanEnemy";
import { IFactoryPattern } from "./IFactoryPattern";

export class HumanEnemyFactory implements  IFactoryPattern<HumanEnemy>
{
    createInstance(): HumanEnemy {
        return new HumanEnemy();
    }
}