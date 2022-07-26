import { Subscriber } from "./Behavior/Observer/Subscriber";
import { YoutubeChannelObservable } from "./Behavior/Observer/YoutubeChannelObservable";
import { BombAttackStrategy } from "./Behavior/Strategy/BombAttackStrategy";
import { FireAttackStrategy } from "./Behavior/Strategy/FireAttackStrategy";
import { RayAttackStrategy } from "./Behavior/Strategy/RayAttackStrategy";
import BotEnemy from "./Creational/Factory/BotEnemy";
import { BotEnemyFactory } from "./Creational/Factory/BotEnemyFactory";
import { HumanEnemyFactory } from "./Creational/Factory/HumanEnemyFactory";
import { OrcEnemyFactory } from "./Creational/Factory/OrcEnemyFactory";

export class  ExampleOfStrategy{
    rayAttack: RayAttackStrategy = new RayAttackStrategy();
    fireAttack: FireAttackStrategy = new FireAttackStrategy();
    bombAttack: BombAttackStrategy = new BombAttackStrategy();

    attack(){
        let random: number = Math.floor(Math.random() * 3);

       switch (random) {
        case 0:
            this.rayAttack.Execute();
            break;
         case 1:
            this.fireAttack.Execute();
            break;
        default:
            this.bombAttack.Execute();
            break;
       }
    }
}


export class  ExampleOfFactory{
    botEnemyFactory: BotEnemyFactory = new BotEnemyFactory();
    humanEnemyFactory: HumanEnemyFactory = new HumanEnemyFactory();
    orcEnemyFactory: OrcEnemyFactory = new OrcEnemyFactory();

    createAndAttack(){
        let random: number = Math.floor(Math.random() * 3);

       switch (random) {
        case 0:
            this.botEnemyFactory.createInstance().attack();
            break;
         case 1:
            this.humanEnemyFactory.createInstance().attack();
            break;
        default:
            this.orcEnemyFactory.createInstance().attack();
            break;
       }
    }
}


export class ExamplesOfUse{

    /* Creational patterns */
    ExampleOfFactory(){
        let factory : ExampleOfFactory = new ExampleOfFactory();

        factory.createAndAttack();
    }

    /* Behavior patterns */
    ExampleOfStrategy(){
        let strategy : ExampleOfStrategy = new ExampleOfStrategy();

        strategy.attack();
    }

    ExampleOfObservable(){
      let youtubeChannel = new  YoutubeChannelObservable();

      youtubeChannel.attach(new Subscriber("Alvaro"));
      youtubeChannel.attach(new Subscriber("Alex"));

      let paula = new Subscriber("Paula");
      youtubeChannel.attach(paula);

      youtubeChannel.attach(new Subscriber("Enrique"));

      youtubeChannel.notify();

      youtubeChannel.detach(paula);

      console.log("Detaching Paula");
      youtubeChannel.notify();
    }
}

let program = new ExamplesOfUse();
// program.ExampleOfStrategy();
//program.ExampleOfFactory();
program.ExampleOfObservable();