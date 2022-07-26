"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiplyComand = void 0;
var MultiplyComand = /** @class */ (function () {
    function MultiplyComand(multiplier) {
        this.multiplyResult = 1;
        this.multiplier = multiplier;
    }
    MultiplyComand.prototype.execute = function (value) {
        this.multiplyResult = this.multiplier * value;
        return this.multiplyResult;
    };
    MultiplyComand.prototype.undo = function () {
        return this.multiplyResult / this.multiplier;
    };
    return MultiplyComand;
}());
exports.MultiplyComand = MultiplyComand;
