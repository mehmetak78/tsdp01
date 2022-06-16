"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Aggregate_1 = __importDefault(require("./Aggregate"));
const IteratorConcept_1 = __importDefault(require("./IteratorConcept"));
const aggregates = [
    new Aggregate_1.default(),
    new Aggregate_1.default(),
    new Aggregate_1.default(),
    new Aggregate_1.default()
];
const iterable = new IteratorConcept_1.default(aggregates);
while (iterable.hasNext()) {
    iterable.next().method();
}
