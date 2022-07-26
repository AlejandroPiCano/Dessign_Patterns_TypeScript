export interface IObservable<T>{
    notify(): void,
    attach(observer: T): void,
    detach(observer: T): void,
}