import BotEnemy from "./BotEnemy";

export class BotEnemyFactory implements  IFactoryPattern<BotEnemy>
{
    createInstance(): BotEnemy {
        return new BotEnemy();
    }
}