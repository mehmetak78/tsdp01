"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Table_1 = __importDefault(require("./Table"));
class MediumTable extends Table_1.default {
    constructor() {
        super();
        this.name = "MediumTable";
        this.depth = 60;
        this.height = 60;
        this.width = 60;
    }
}
exports.default = MediumTable;
