"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Singleton_1 = __importDefault(require("./Singleton"));
const obj1 = new Singleton_1.default(1);
const obj2 = new Singleton_1.default(2);
console.log(obj1.id);
console.log(obj2.id);
console.log(obj1 === obj2);
