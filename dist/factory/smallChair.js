"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chair_1 = __importDefault(require("./chair"));
class SmallChair extends chair_1.default {
    constructor() {
        super();
        this.height = 40;
        this.width = 40;
        this.depth = 40;
    }
}
exports.default = SmallChair;
