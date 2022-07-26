"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrcDecorator = void 0;
var EnemyDecorator_1 = require("./EnemyDecorator");
var OrcDecorator = /** @class */ (function (_super) {
    __extends(OrcDecorator, _super);
    function OrcDecorator(enemy) {
        var _this = _super.call(this, enemy) || this;
        _this.enemy = enemy;
        return _this;
    }
    OrcDecorator.prototype.attack = function () {
        this.enemy.attack();
    };
    OrcDecorator.prototype.takeDamage = function () {
        return this.enemy.takeDamage();
    };
    return OrcDecorator;
}(EnemyDecorator_1.EnemyDecorator));
exports.OrcDecorator = OrcDecorator;
