"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Successor1_1 = __importDefault(require("./Successor1"));
class Successor2 {
    handle(payload) {
        console.log(`Successor 2 payload = ${payload}`);
        const test = Math.floor(Math.random() * 3) + 1;
        if (test === 1) {
            payload *= 2;
            payload = new Successor1_1.default().handle(payload);
        }
        else if (test === 2) {
            payload /= 2;
            payload = new Successor2().handle(payload);
        }
        return payload;
    }
}
exports.default = Successor2;
