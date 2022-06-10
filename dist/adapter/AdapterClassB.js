"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassB_1 = __importDefault(require("./ClassB"));
class AdapterClassB {
    constructor() {
        this.objB = new ClassB_1.default();
    }
    methodA() {
        this.objB.methodB();
    }
}
exports.default = AdapterClassB;
