import MediumLevel from "./MediumLevel";

export class OrcEnemyLevelMediumAbstractFactory implements IAbstractFactoryPattern<OrcEnemy, MediumLevel>
{
    createInstanceOfT(): OrcEnemy {
        return new OrcEnemy();
    }
    createInstanceOfK(): MediumLevel {
        return new MediumLevel();
    }
    
}