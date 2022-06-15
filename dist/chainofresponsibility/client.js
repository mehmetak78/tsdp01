"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Chain_1 = __importDefault(require("./Chain"));
const chain = new Chain_1.default();
const payload = 1;
const out = chain.start(payload);
console.log(`Finished result = ${out}`);
