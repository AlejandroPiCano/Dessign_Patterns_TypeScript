"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanEnemyLevelhardAbstractFactory = void 0;
var HumanEnemy_1 = __importDefault(require("../Factory/HumanEnemy"));
var HardLevel_1 = __importDefault(require("./HardLevel"));
var HumanEnemyLevelhardAbstractFactory = /** @class */ (function () {
    function HumanEnemyLevelhardAbstractFactory() {
    }
    HumanEnemyLevelhardAbstractFactory.prototype.createInstanceOfT = function () {
        return new HumanEnemy_1.default();
    };
    HumanEnemyLevelhardAbstractFactory.prototype.createInstanceOfK = function () {
        return new HardLevel_1.default();
    };
    return HumanEnemyLevelhardAbstractFactory;
}());
exports.HumanEnemyLevelhardAbstractFactory = HumanEnemyLevelhardAbstractFactory;
