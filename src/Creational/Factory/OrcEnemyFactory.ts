import { OrcEnemy } from "./OrcEnemy";

export class OrcEnemyFactory implements  IFactoryPattern<OrcEnemy>
{
    createInstance(): OrcEnemy {
        return new OrcEnemy();
    }
}