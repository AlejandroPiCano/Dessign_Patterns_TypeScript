"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcEnemyLevelEasyAbstractFactory = void 0;
var OrcEnemy_1 = require("../Factory/OrcEnemy");
var EasyLevel_1 = __importDefault(require("./EasyLevel"));
var OrcEnemyLevelEasyAbstractFactory = /** @class */ (function () {
    function OrcEnemyLevelEasyAbstractFactory() {
    }
    OrcEnemyLevelEasyAbstractFactory.prototype.createInstanceOfT = function () {
        return new OrcEnemy_1.OrcEnemy();
    };
    OrcEnemyLevelEasyAbstractFactory.prototype.createInstanceOfK = function () {
        return new EasyLevel_1.default();
    };
    return OrcEnemyLevelEasyAbstractFactory;
}());
exports.OrcEnemyLevelEasyAbstractFactory = OrcEnemyLevelEasyAbstractFactory;
