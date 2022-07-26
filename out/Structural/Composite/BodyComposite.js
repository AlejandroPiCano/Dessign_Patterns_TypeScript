"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyComposite = void 0;
var BodyComposite = /** @class */ (function () {
    function BodyComposite() {
        this.components = [];
    }
    BodyComposite.prototype.operation = function () {
        this.components.forEach(function (component) {
            component.operation();
        });
    };
    BodyComposite.prototype.add = function (component) {
        this.components.push(component);
    };
    BodyComposite.prototype.remove = function (component) {
        this.components = this.components.filter(function (c) { return c !== component; });
    };
    return BodyComposite;
}());
exports.BodyComposite = BodyComposite;
