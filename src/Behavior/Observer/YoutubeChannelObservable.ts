import { Subscriber } from "./Subscriber";

export class YoutubeChannelObservable implements IObservable<Subscriber>{
    subscribers: Subscriber[] = [];

    notify(): void {
      this.subscribers.forEach(subscriber => {
        subscriber.update();
      });
    }

    attach(subscriber: Subscriber): void {
        this.subscribers.push(subscriber);
    }

    detach(subscriber: Subscriber): void {
        this.subscribers = this.subscribers.filter((s) => s.userName !==  subscriber.userName);
        //another way
        // let index = this.subscribers.indexOf(subscriber);
        // this.subscribers.splice(index, 1);
    }
}