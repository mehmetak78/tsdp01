"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Table_1 = __importDefault(require("./Table"));
class SmallTable extends Table_1.default {
    constructor() {
        super();
        this.name = "SmallTable";
        this.width = 40;
        this.height = 40;
        this.depth = 40;
    }
}
exports.default = SmallTable;
