"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RefinedAbstractionA {
    constructor(implementer) {
        this.implementer = implementer;
    }
    method(value) {
        this.implementer.method(value);
    }
}
exports.default = RefinedAbstractionA;
