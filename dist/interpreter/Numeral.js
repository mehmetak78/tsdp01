"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Numeral {
    constructor(value) {
        this.value = parseInt(value);
    }
    interpret() {
        return this.value;
    }
}
exports.default = Numeral;
