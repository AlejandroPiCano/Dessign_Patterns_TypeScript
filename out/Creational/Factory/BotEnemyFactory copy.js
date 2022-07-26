"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotFactory = void 0;
var BotEnemy_1 = __importDefault(require("./BotEnemy"));
var BotFactory = /** @class */ (function () {
    function BotFactory() {
    }
    BotFactory.prototype.createInstance = function () {
        return new BotEnemy_1.default();
    };
    return BotFactory;
}());
exports.BotFactory = BotFactory;
