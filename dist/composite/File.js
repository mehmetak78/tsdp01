"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class File {
    constructor(name) {
        this.referenceToParent = undefined;
        this.name = name;
    }
    dir(indent) {
        console.log(`${indent}<FILE> ${this.name}`);
    }
    detach() {
        if (this.referenceToParent) {
            this.referenceToParent.delete(this);
        }
    }
}
exports.default = File;
