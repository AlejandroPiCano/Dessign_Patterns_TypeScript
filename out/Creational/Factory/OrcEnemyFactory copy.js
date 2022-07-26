"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyFactory = void 0;
var EnemyFactory = /** @class */ (function () {
    function EnemyFactory() {
    }
    EnemyFactory.prototype.createInstance = function () {
        return new OrcEnemy();
    };
    return EnemyFactory;
}());
exports.EnemyFactory = EnemyFactory;
