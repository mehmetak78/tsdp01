"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Table {
    constructor() {
        this.name = "";
        this.depth = 0;
        this.height = 0;
        this.width = 0;
    }
    getDimensions() {
        return {
            width: this.width,
            height: this.height,
            depth: this.depth
        };
    }
}
exports.default = Table;
