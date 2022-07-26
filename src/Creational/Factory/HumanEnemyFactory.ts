import HumanEnemy from "./HumanEnemy";

export class HumanEnemyFactory implements  IFactoryPattern<HumanEnemy>
{
    createInstance(): HumanEnemy {
        return new HumanEnemy();
    }
}