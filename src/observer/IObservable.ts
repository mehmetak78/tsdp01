import IObserver from "./IObserver";

export default interface IObservable {
    subscribe(observer: IObserver): void;
    unsubscribe(observer: IObserver): void;
    changeStateAndNotify(...args: unknown[]): void;
}