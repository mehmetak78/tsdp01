"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HouseBuilder_1 = __importDefault(require("./HouseBuilder"));
class IglooDirector {
    static construct() {
        return new HouseBuilder_1.default()
            .setBuildingType("Igloo")
            .setWallMaterial("Ice")
            .setNumberDoors(1)
            .getResult();
    }
}
exports.default = IglooDirector;
