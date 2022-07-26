import BotEnemy from "./BotEnemy";
import { IFactoryPattern } from "./IFactoryPattern";

export class BotEnemyFactory implements  IFactoryPattern<BotEnemy>
{
    createInstance(): BotEnemy {
        return new BotEnemy();
    }
}