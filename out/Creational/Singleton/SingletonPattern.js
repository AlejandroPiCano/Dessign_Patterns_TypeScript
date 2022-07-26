"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.GetInstance = function () {
        if (!Singleton.singletonInstance) {
            Singleton.singletonInstance = new Singleton();
        }
        return Singleton.singletonInstance;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
