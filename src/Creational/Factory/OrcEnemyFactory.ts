


export class EnemyFactory implements  IFactoryPattern<OrcEnemy>
{
    createInstance(): OrcEnemy {
        return new OrcEnemy();
    }
}