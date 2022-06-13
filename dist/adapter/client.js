"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassA_1 = __importDefault(require("./ClassA"));
const AdapterClassB_1 = __importDefault(require("./AdapterClassB"));
const objA = new ClassA_1.default();
const objB = new AdapterClassB_1.default();
const items = [objA, objB];
items.forEach(item => {
    item.methodA();
});
