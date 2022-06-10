"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Decorator {
    constructor(object) {
        this.object = object;
    }
    method() {
        return `Decorated Method (${this.object.method()})`;
    }
}
exports.default = Decorator;
