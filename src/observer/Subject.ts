import IObservable from "./IObservable";
import IObserver from "./IObserver";

export default class Subject implements IObservable {
    private observers: Set<IObserver>;

    constructor() {
        this.observers = new Set();
    }

    subscribe(observer: IObserver): void {
        this.observers.add(observer);
    }

    unsubscribe(observer: IObserver): void {
        this.observers.delete(observer)
    }

    changeStateAndNotify(...args: unknown[]): void {
        this.observers.forEach(observer => {
            observer.notify(...args);
        })
    }

}