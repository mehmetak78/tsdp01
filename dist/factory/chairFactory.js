"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bigChair_1 = __importDefault(require("./bigChair"));
const mediumChair_1 = __importDefault(require("./mediumChair"));
const smallChair_1 = __importDefault(require("./smallChair"));
class ChairFactory {
    static createChair(chairType) {
        switch (chairType) {
            case "BigChair":
                return new bigChair_1.default();
            case "MediumChair":
                return new mediumChair_1.default();
            case "SmallChair":
                return new smallChair_1.default();
        }
    }
}
exports.default = ChairFactory;
