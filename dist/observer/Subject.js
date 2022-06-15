"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor() {
        this.observers = new Set();
    }
    subscribe(observer) {
        this.observers.add(observer);
    }
    unsubscribe(observer) {
        this.observers.delete(observer);
    }
    changeStateAndNotify(...args) {
        this.observers.forEach(observer => {
            observer.notify(...args);
        });
    }
}
exports.default = Subject;
