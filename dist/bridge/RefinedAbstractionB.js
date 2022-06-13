"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RefinedAbstractionB {
    constructor(implementer) {
        this.implementer = implementer;
    }
    method(value) {
        this.implementer.method(value);
    }
}
exports.default = RefinedAbstractionB;
