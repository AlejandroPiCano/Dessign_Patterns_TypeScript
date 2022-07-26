import HumanEnemy from "../Factory/HumanEnemy";
import HardLevel from "./HardLevel";
import { IAbstractFactoryPattern } from "./IAbstractFactoryPatter";

export class HumanEnemyLevelhardAbstractFactory implements IAbstractFactoryPattern<HumanEnemy, HardLevel>
{
    createInstanceOfT(): HumanEnemy {
        return new HumanEnemy();
    }
    createInstanceOfK(): HardLevel {
        return new HardLevel();
    }
    
}