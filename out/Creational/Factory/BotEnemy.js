"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BotEnemy = /** @class */ (function () {
    function BotEnemy() {
    }
    BotEnemy.prototype.takeDamage = function () {
        return 7;
    };
    BotEnemy.prototype.attack = function () {
        console.log("Bot attack.");
    };
    return BotEnemy;
}());
exports.default = BotEnemy;
