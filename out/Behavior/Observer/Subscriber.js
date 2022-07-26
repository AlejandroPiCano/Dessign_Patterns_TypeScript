"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
var Subscriber = /** @class */ (function () {
    function Subscriber(userName) {
        this.userName = "";
        this.userName = userName;
    }
    Subscriber.prototype.update = function () {
        console.log(this.userName + ": New video upload");
    };
    return Subscriber;
}());
exports.Subscriber = Subscriber;
