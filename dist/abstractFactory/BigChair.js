"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Chair_1 = __importDefault(require("./Chair"));
class BigChair extends Chair_1.default {
    constructor() {
        super();
        this.name = 'BigChair';
        this.height = 80;
        this.width = 80;
        this.depth = 80;
    }
}
exports.default = BigChair;
