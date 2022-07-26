"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyDecorator = void 0;
var EnemyDecorator = /** @class */ (function () {
    function EnemyDecorator(enemy) {
        this.enemy = enemy;
    }
    EnemyDecorator.prototype.attack = function () {
        this.enemy.attack();
    };
    EnemyDecorator.prototype.takeDamage = function () {
        return this.enemy.takeDamage();
    };
    return EnemyDecorator;
}());
exports.EnemyDecorator = EnemyDecorator;
