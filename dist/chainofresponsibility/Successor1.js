"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Successor2_1 = __importDefault(require("./Successor2"));
class Successor1 {
    handle(payload) {
        console.log(`Successor 1 payload = ${payload}`);
        const test = Math.floor(Math.random() * 2) + 1;
        if (test === 1) {
            payload++;
            payload = new Successor1().handle(payload);
        }
        else {
            payload--;
            payload = new Successor2_1.default().handle(payload);
        }
        return payload;
    }
}
exports.default = Successor1;
