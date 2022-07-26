"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotEnemyFactory = void 0;
var BotEnemy_1 = __importDefault(require("./BotEnemy"));
var BotEnemyFactory = /** @class */ (function () {
    function BotEnemyFactory() {
    }
    BotEnemyFactory.prototype.createInstance = function () {
        return new BotEnemy_1.default();
    };
    return BotEnemyFactory;
}());
exports.BotEnemyFactory = BotEnemyFactory;
