"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chair {
    constructor() {
        this.name = "";
        this.height = 0;
        this.width = 0;
        this.depth = 0;
    }
    getDimensions() {
        return {
            width: this.width,
            height: this.height,
            depth: this.depth
        };
    }
}
exports.default = Chair;
