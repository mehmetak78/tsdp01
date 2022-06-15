"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Successor1_1 = __importDefault(require("./Successor1"));
class Chain {
    start(payload) {
        return new Successor1_1.default().handle(payload);
    }
}
exports.default = Chain;
