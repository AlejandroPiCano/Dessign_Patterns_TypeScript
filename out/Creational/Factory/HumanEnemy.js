"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HumanEnemy = /** @class */ (function () {
    function HumanEnemy() {
    }
    HumanEnemy.prototype.attack = function () {
        console.log("Human attack.");
    };
    HumanEnemy.prototype.takeDamage = function () {
        return 10;
    };
    return HumanEnemy;
}());
exports.default = HumanEnemy;
