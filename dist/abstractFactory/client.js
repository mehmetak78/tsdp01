"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FurnitureFactory_1 = __importDefault(require("./FurnitureFactory"));
let furniture = FurnitureFactory_1.default.createFurniture("SmallChair");
console.log(furniture === null || furniture === void 0 ? void 0 : furniture.name);
console.log(furniture === null || furniture === void 0 ? void 0 : furniture.getDimensions());
furniture = FurnitureFactory_1.default.createFurniture("BigTable");
console.log(furniture === null || furniture === void 0 ? void 0 : furniture.name);
console.log(furniture === null || furniture === void 0 ? void 0 : furniture.getDimensions());
