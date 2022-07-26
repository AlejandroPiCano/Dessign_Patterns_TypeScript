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
exports.OrcUpgradedDecorator = void 0;
var EnemyDecorator_1 = require("./EnemyDecorator");
var OrcUpgradedDecorator = /** @class */ (function (_super) {
    __extends(OrcUpgradedDecorator, _super);
    function OrcUpgradedDecorator(enemy) {
        var _this = _super.call(this, enemy) || this;
        _this.enemy = enemy;
        return _this;
    }
    OrcUpgradedDecorator.prototype.attack = function () {
        this.enemy.attack();
    };
    OrcUpgradedDecorator.prototype.takeDamage = function () {
        return this.enemy.takeDamage() * 1.5;
    };
    return OrcUpgradedDecorator;
}(EnemyDecorator_1.EnemyDecorator));
exports.OrcUpgradedDecorator = OrcUpgradedDecorator;
