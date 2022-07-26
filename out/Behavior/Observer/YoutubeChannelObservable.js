"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeChannelObservable = void 0;
var YoutubeChannelObservable = /** @class */ (function () {
    function YoutubeChannelObservable() {
        this.subscribers = [];
    }
    YoutubeChannelObservable.prototype.notify = function () {
        this.subscribers.forEach(function (subscriber) {
            subscriber.update();
        });
    };
    YoutubeChannelObservable.prototype.attach = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    YoutubeChannelObservable.prototype.detach = function (subscriber) {
        this.subscribers = this.subscribers.filter(function (s) { return s.userName !== subscriber.userName; });
        //another way
        // let index = this.subscribers.indexOf(subscriber);
        // this.subscribers.splice(index, 1);
    };
    return YoutubeChannelObservable;
}());
exports.YoutubeChannelObservable = YoutubeChannelObservable;
