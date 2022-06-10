"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __importDefault(require("./Component"));
const Decorator_1 = __importDefault(require("./Decorator"));
const component = new Component_1.default();
console.log(component.method());
const decoratedComp = new Decorator_1.default(component);
console.log(decoratedComp.method());
const additionalDecoratedComp = new Decorator_1.default(decoratedComp);
console.log(additionalDecoratedComp.method());
