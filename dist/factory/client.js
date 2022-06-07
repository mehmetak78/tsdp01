"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chairFactory_1 = __importDefault(require("./chairFactory"));
const chair = chairFactory_1.default.createChair("MediumChair");
console.log(chair.getDimension());
