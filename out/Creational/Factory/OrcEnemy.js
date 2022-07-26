"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcEnemy = void 0;
var OrcEnemy = /** @class */ (function () {
    function OrcEnemy() {
    }
    OrcEnemy.prototype.takeDamage = function () {
        return 5;
    };
    OrcEnemy.prototype.attack = function () {
        console.log("Orc attack.");
    };
    return OrcEnemy;
}());
exports.OrcEnemy = OrcEnemy;
