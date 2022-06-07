"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmallChair_1 = __importDefault(require("./SmallChair"));
const MediumChair_1 = __importDefault(require("./MediumChair"));
const BigChair_1 = __importDefault(require("./BigChair"));
class ChairFactory {
    static createChair(chairType) {
        switch (chairType) {
            case "SmallChair": return new SmallChair_1.default();
            case "MediumChair": return new MediumChair_1.default();
            case "BigChair": return new BigChair_1.default();
            default:
                throw new Error("Chair Not Found");
        }
    }
}
exports.default = ChairFactory;
