"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HouseBuilder_1 = __importDefault(require("./HouseBuilder"));
class CastleDirector {
    static construct() {
        return new HouseBuilder_1.default()
            .setBuildingType("Castle")
            .setWallMaterial("SAndstone")
            .setNumberDoors(100)
            .setNumberWindows(200)
            .getResult();
    }
}
exports.default = CastleDirector;
