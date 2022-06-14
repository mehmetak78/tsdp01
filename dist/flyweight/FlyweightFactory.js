"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyweightFactory = void 0;
const Flyweight_1 = __importDefault(require("./Flyweight"));
class FlyweightFactory {
    static getFlyweight(code) {
        if (!(code in FlyweightFactory.flyweights)) {
            FlyweightFactory.flyweights[code] = new Flyweight_1.default(code);
        }
        return FlyweightFactory.flyweights[code];
    }
    static getCount() {
        return Object.keys(FlyweightFactory.flyweights).length;
    }
}
exports.FlyweightFactory = FlyweightFactory;
FlyweightFactory.flyweights = {};
