"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcEnemyLevelOneAbstractFactory = void 0;
var EasyLevel_1 = __importDefault(require("./EasyLevel"));
var OrcEnemyLevelOneAbstractFactory = /** @class */ (function () {
    function OrcEnemyLevelOneAbstractFactory() {
    }
    OrcEnemyLevelOneAbstractFactory.prototype.createInstanceOfT = function () {
        return new OrcEnemy();
    };
    OrcEnemyLevelOneAbstractFactory.prototype.createInstanceOfK = function () {
        return new EasyLevel_1.default();
    };
    return OrcEnemyLevelOneAbstractFactory;
}());
exports.OrcEnemyLevelOneAbstractFactory = OrcEnemyLevelOneAbstractFactory;
