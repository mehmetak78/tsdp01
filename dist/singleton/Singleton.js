"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Singleton {
    constructor(id) {
        this.id = id;
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}
exports.default = Singleton;
