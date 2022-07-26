"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamplesOfUse = exports.ExampleOfFactory = exports.ExampleOfStrategy = void 0;
var Subscriber_1 = require("./Behavior/Observer/Subscriber");
var YoutubeChannelObservable_1 = require("./Behavior/Observer/YoutubeChannelObservable");
var BombAttackStrategy_1 = require("./Behavior/Strategy/BombAttackStrategy");
var FireAttackStrategy_1 = require("./Behavior/Strategy/FireAttackStrategy");
var RayAttackStrategy_1 = require("./Behavior/Strategy/RayAttackStrategy");
var BotEnemyFactory_1 = require("./Creational/Factory/BotEnemyFactory");
var HumanEnemyFactory_1 = require("./Creational/Factory/HumanEnemyFactory");
var OrcEnemyFactory_1 = require("./Creational/Factory/OrcEnemyFactory");
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
var ExamplesOfUse = /** @class */ (function () {
    function ExamplesOfUse() {
    }
    /* Creational patterns */
    ExamplesOfUse.prototype.ExampleOfFactory = function () {
        var factory = new ExampleOfFactory();
        factory.createAndAttack();
    };
    /* Behavior patterns */
    ExamplesOfUse.prototype.ExampleOfStrategy = function () {
        var strategy = new ExampleOfStrategy();
        strategy.attack();
    };
    ExamplesOfUse.prototype.ExampleOfObservable = function () {
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
    return ExamplesOfUse;
}());
exports.ExamplesOfUse = ExamplesOfUse;
var program = new ExamplesOfUse();
// program.ExampleOfStrategy();
//program.ExampleOfFactory();
program.ExampleOfObservable();
