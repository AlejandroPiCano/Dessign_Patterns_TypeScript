"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcEnemyFactory = void 0;
var OrcEnemy_1 = require("./OrcEnemy");
var OrcEnemyFactory = /** @class */ (function () {
    function OrcEnemyFactory() {
    }
    OrcEnemyFactory.prototype.createInstance = function () {
        return new OrcEnemy_1.OrcEnemy();
    };
    return OrcEnemyFactory;
}());
exports.OrcEnemyFactory = OrcEnemyFactory;
