"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanEnemyFactory = void 0;
var HumanEnemy_1 = __importDefault(require("./HumanEnemy"));
var HumanEnemyFactory = /** @class */ (function () {
    function HumanEnemyFactory() {
    }
    HumanEnemyFactory.prototype.createInstance = function () {
        return new HumanEnemy_1.default();
    };
    return HumanEnemyFactory;
}());
exports.HumanEnemyFactory = HumanEnemyFactory;
