"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const House_1 = __importDefault(require("./House"));
class HouseBuilder {
    constructor() {
        this.house = new House_1.default();
    }
    setBuildingType(buildingType) {
        this.house.buildingType = buildingType;
        return this;
    }
    setNumberDoors(doors) {
        this.house.doors = doors;
        return this;
    }
    setNumberWindows(windows) {
        this.house.windows = windows;
        return this;
    }
    setWallMaterial(wallMaterial) {
        this.house.wallMaterial = wallMaterial;
        return this;
    }
    getResult() {
        return this.house;
    }
}
exports.default = HouseBuilder;
