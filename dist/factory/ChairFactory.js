"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BigChair_1 = __importDefault(require("./BigChair"));
const MediumChair_1 = __importDefault(require("./MediumChair"));
const SmallChair_1 = __importDefault(require("./SmallChair"));
class ChairFactory {
    static createChair(chairType) {
        switch (chairType) {
            case "BigChair":
                return new BigChair_1.default();
            case "MediumChair":
                return new MediumChair_1.default();
            case "SmallChair":
                return new SmallChair_1.default();
        }
    }
}
exports.default = ChairFactory;
