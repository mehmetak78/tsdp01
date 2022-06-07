"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmallTable_1 = __importDefault(require("./SmallTable"));
const MediumTable_1 = __importDefault(require("./MediumTable"));
const BigTable_1 = __importDefault(require("./BigTable"));
class TableFactory {
    static createTable(tableType) {
        switch (tableType) {
            case "SmallTable": return new SmallTable_1.default();
            case "MediumTable": return new MediumTable_1.default();
            case "BigTable": return new BigTable_1.default();
            default: throw new Error("Table Not Found");
        }
    }
}
exports.default = TableFactory;
