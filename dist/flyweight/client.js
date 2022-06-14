"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppContext_1 = __importDefault(require("./AppContext"));
const FlyweightFactory_1 = require("./FlyweightFactory");
const appContext = new AppContext_1.default("abracadabra");
console.log(appContext.output());
console.log(`abracadabra has ${'abracadabra'.length} letters`);
console.log(`FlyweightFactory has ${FlyweightFactory_1.FlyweightFactory.getCount()} flyweights`);
