"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class House {
    constructor() {
        this.doors = 0;
        this.windows = 0;
        this.wallMaterial = "";
        this.buildingType = "";
    }
    getConstruction() {
        return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`;
    }
}
exports.default = House;
