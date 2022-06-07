"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChairFactory_1 = __importDefault(require("./ChairFactory"));
const TableFactory_1 = __importDefault(require("./TableFactory"));
class FurnitureFactory {
    static createFurniture(furnitureType) {
        try {
            switch (furnitureType) {
                case "SmallChair":
                case "MediumChair":
                case "BigChair": return ChairFactory_1.default.createChair(furnitureType);
                case "SmallTable":
                case "MediumTable":
                case "BigTable": return TableFactory_1.default.createTable(furnitureType);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = FurnitureFactory;
