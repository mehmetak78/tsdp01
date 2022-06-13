"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Facade_1 = __importDefault(require("./Facade"));
const facadeObj = new Facade_1.default();
console.log(facadeObj.subClassA());
console.log(facadeObj.subclassB("Method of Class B"));
console.log(facadeObj.subClassC({ n: [1, 2, 3] }));
