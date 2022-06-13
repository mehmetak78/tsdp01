"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RefinedAbstractionA_1 = __importDefault(require("./RefinedAbstractionA"));
const ConcreteImplementerA_1 = __importDefault(require("./ConcreteImplementerA"));
const RefinedAbstractionB_1 = __importDefault(require("./RefinedAbstractionB"));
const ConcreteImplementerB_1 = __importDefault(require("./ConcreteImplementerB"));
const values = ['a', 'b', 'c'];
const refinedAbstractionA = new RefinedAbstractionA_1.default(new ConcreteImplementerA_1.default());
refinedAbstractionA.method(values);
const refinedAbstractionB = new RefinedAbstractionB_1.default(new ConcreteImplementerB_1.default());
refinedAbstractionB.method(values);
