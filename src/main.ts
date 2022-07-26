import { Subscriber } from "./Behavior/Observer/Subscriber";
import { YoutubeChannelObservable } from "./Behavior/Observer/YoutubeChannelObservable";
import { BombAttackStrategy } from "./Behavior/Strategy/BombAttackStrategy";
import { FireAttackStrategy } from "./Behavior/Strategy/FireAttackStrategy";
import { RayAttackStrategy } from "./Behavior/Strategy/RayAttackStrategy";
import BotEnemy from "./Creational/Factory/BotEnemy";
import { BotEnemyFactory } from "./Creational/Factory/BotEnemyFactory";
import HumanEnemy from "./Creational/Factory/HumanEnemy";
import { HumanEnemyFactory } from "./Creational/Factory/HumanEnemyFactory";
import { OrcEnemy } from "./Creational/Factory/OrcEnemy";
import { OrcEnemyFactory } from "./Creational/Factory/OrcEnemyFactory";
import { ArmourDecorator } from "./Structural/ArmourDecorator";
import { HelmetDecorator } from "./Structural/HelmetDecorator";

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


export class main{

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

    ExampleOfDecorator(){
        let orcEnemy : OrcEnemy = new OrcEnemy();

        var orcHelmetDecorator: HelmetDecorator = new HelmetDecorator(orcEnemy);
        var orcArmourDecorator: ArmourDecorator = new ArmourDecorator(orcHelmetDecorator);

        console.log(`orc enemy take a damage ${orcArmourDecorator.takeDamage()}`);


        let humanEnemy : HumanEnemy = new HumanEnemy();

        var humanHelmetDecorator: HelmetDecorator = new HelmetDecorator(humanEnemy);
        var humanArmourDecorator: ArmourDecorator = new ArmourDecorator(humanHelmetDecorator);

        console.log(`human enemy take a damage ${humanArmourDecorator.takeDamage()}`);
    }
}

let program = new main();
// program.ExampleOfStrategy();
//program.ExampleOfFactory();
//program.ExampleOfObservable();
program.ExampleOfDecorator();