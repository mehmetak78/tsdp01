"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Table_1 = __importDefault(require("./Table"));
class BigTable extends Table_1.default {
    constructor() {
        super();
        this.name = 'BigTable';
        this.depth = 80;
        this.height = 80;
        this.width = 80;
    }
}
exports.default = BigTable;
