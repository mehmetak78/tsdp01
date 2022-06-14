import IObserver from "./IObserver";
import IObservable from "./IObservable";

export default class Observer implements IObserver {
    private id: number;

    constructor(observable: IObservable, id: number) {
        this.id = id;
        observable.subscribe(this);
    }

    notify(...args:unknown[]) {
        console.log(`OBSERVER_${this.id} received ${JSON.stringify(args)}`)
    }
}