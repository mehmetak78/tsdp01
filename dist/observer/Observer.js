"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observer {
    constructor(observable, id) {
        this.id = id;
        observable.subscribe(this);
    }
    notify(...args) {
        console.log(`OBSERVER_${this.id} received ${JSON.stringify(args)}`);
    }
}
exports.default = Observer;
