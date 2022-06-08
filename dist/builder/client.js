"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IglooDirector_1 = __importDefault(require("./IglooDirector"));
const CastleDirector_1 = __importDefault(require("./CastleDirector"));
const HouseBoatDirector_1 = __importDefault(require("./HouseBoatDirector"));
const igloo = IglooDirector_1.default.construct();
const castle = CastleDirector_1.default.construct();
const houseBoat = HouseBoatDirector_1.default.construct();
console.log(igloo.getConstruction());
console.log(castle.getConstruction());
console.log(houseBoat.getConstruction());
