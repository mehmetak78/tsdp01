"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SubClassA_1 = __importDefault(require("./SubClassA"));
const SubClassB_1 = __importDefault(require("./SubClassB"));
const SubClassC_1 = __importDefault(require("./SubClassC"));
class Facade {
    subClassA() {
        return new SubClassA_1.default().method();
    }
    subclassB(value) {
        return new SubClassB_1.default().method(value);
    }
    subClassC(value) {
        return new SubClassC_1.default().method(value);
    }
}
exports.default = Facade;
