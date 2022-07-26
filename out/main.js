"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.ExampleOfFactory = exports.ExampleOfStrategy = void 0;
var Subscriber_1 = require("./Behavior/Observer/Subscriber");
var YoutubeChannelObservable_1 = require("./Behavior/Observer/YoutubeChannelObservable");
var BombAttackStrategy_1 = require("./Behavior/Strategy/BombAttackStrategy");
var FireAttackStrategy_1 = require("./Behavior/Strategy/FireAttackStrategy");
var RayAttackStrategy_1 = require("./Behavior/Strategy/RayAttackStrategy");
var BotEnemyFactory_1 = require("./Creational/Factory/BotEnemyFactory");
var HumanEnemy_1 = __importDefault(require("./Creational/Factory/HumanEnemy"));
var HumanEnemyFactory_1 = require("./Creational/Factory/HumanEnemyFactory");
var OrcEnemy_1 = require("./Creational/Factory/OrcEnemy");
var OrcEnemyFactory_1 = require("./Creational/Factory/OrcEnemyFactory");
var ArmourDecorator_1 = require("./Structural/ArmourDecorator");
var HelmetDecorator_1 = require("./Structural/HelmetDecorator");
var ExampleOfStrategy = /** @class */ (function () {
    function ExampleOfStrategy() {
        this.rayAttack = new RayAttackStrategy_1.RayAttackStrategy();
        this.fireAttack = new FireAttackStrategy_1.FireAttackStrategy();
        this.bombAttack = new BombAttackStrategy_1.BombAttackStrategy();
    }
    ExampleOfStrategy.prototype.attack = function () {
        var random = Math.floor(Math.random() * 3);
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
    };
    return ExampleOfStrategy;
}());
exports.ExampleOfStrategy = ExampleOfStrategy;
var ExampleOfFactory = /** @class */ (function () {
    function ExampleOfFactory() {
        this.botEnemyFactory = new BotEnemyFactory_1.BotEnemyFactory();
        this.humanEnemyFactory = new HumanEnemyFactory_1.HumanEnemyFactory();
        this.orcEnemyFactory = new OrcEnemyFactory_1.OrcEnemyFactory();
    }
    ExampleOfFactory.prototype.createAndAttack = function () {
        var random = Math.floor(Math.random() * 3);
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
    };
    return ExampleOfFactory;
}());
exports.ExampleOfFactory = ExampleOfFactory;
var main = /** @class */ (function () {
    function main() {
    }
    /* Creational patterns */
    main.prototype.ExampleOfFactory = function () {
        var factory = new ExampleOfFactory();
        factory.createAndAttack();
    };
    /* Behavior patterns */
    main.prototype.ExampleOfStrategy = function () {
        var strategy = new ExampleOfStrategy();
        strategy.attack();
    };
    main.prototype.ExampleOfObservable = function () {
        var youtubeChannel = new YoutubeChannelObservable_1.YoutubeChannelObservable();
        youtubeChannel.attach(new Subscriber_1.Subscriber("Alvaro"));
        youtubeChannel.attach(new Subscriber_1.Subscriber("Alex"));
        var paula = new Subscriber_1.Subscriber("Paula");
        youtubeChannel.attach(paula);
        youtubeChannel.attach(new Subscriber_1.Subscriber("Enrique"));
        youtubeChannel.notify();
        youtubeChannel.detach(paula);
        console.log("Detaching Paula");
        youtubeChannel.notify();
    };
    main.prototype.ExampleOfDecorator = function () {
        var orcEnemy = new OrcEnemy_1.OrcEnemy();
        var orcHelmetDecorator = new HelmetDecorator_1.HelmetDecorator(orcEnemy);
        var orcArmourDecorator = new ArmourDecorator_1.ArmourDecorator(orcHelmetDecorator);
        console.log("orc enemy take a damage " + orcArmourDecorator.takeDamage());
        var humanEnemy = new HumanEnemy_1.default();
        var humanHelmetDecorator = new HelmetDecorator_1.HelmetDecorator(humanEnemy);
        var humanArmourDecorator = new ArmourDecorator_1.ArmourDecorator(humanHelmetDecorator);
        console.log("human enemy take a damage " + humanArmourDecorator.takeDamage());
    };
    return main;
}());
exports.main = main;
var program = new main();
// program.ExampleOfStrategy();
//program.ExampleOfFactory();
//program.ExampleOfObservable();
program.ExampleOfDecorator();
