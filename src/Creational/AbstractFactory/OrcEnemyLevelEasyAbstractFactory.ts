import { OrcEnemy } from "../Factory/OrcEnemy";
import EasyLevel from "./EasyLevel";

export class OrcEnemyLevelEasyAbstractFactory implements IAbstractFactoryPattern<OrcEnemy, EasyLevel>
{
    createInstanceOfT(): OrcEnemy {
        return new OrcEnemy();
    }
    createInstanceOfK(): EasyLevel {
        return new EasyLevel();
    }
    
}