"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcEnemyLevelMediumAbstractFactory = void 0;
var MediumLevel_1 = __importDefault(require("./MediumLevel"));
var OrcEnemyLevelMediumAbstractFactory = /** @class */ (function () {
    function OrcEnemyLevelMediumAbstractFactory() {
    }
    OrcEnemyLevelMediumAbstractFactory.prototype.createInstanceOfT = function () {
        return new OrcEnemy();
    };
    OrcEnemyLevelMediumAbstractFactory.prototype.createInstanceOfK = function () {
        return new MediumLevel_1.default();
    };
    return OrcEnemyLevelMediumAbstractFactory;
}());
exports.OrcEnemyLevelMediumAbstractFactory = OrcEnemyLevelMediumAbstractFactory;
