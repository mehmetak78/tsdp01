"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BigDocument {
    constructor(name, array) {
        this.name = name;
        this.array = array;
    }
    clone(mode) {
        let array;
        if (mode === 2) {
            array = JSON.parse(JSON.stringify(this.array));
        }
        else {
            array = Object.assign([], this.array);
        }
        return new BigDocument(this.name, array);
    }
}
exports.default = BigDocument;
