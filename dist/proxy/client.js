"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProxySubject_1 = __importDefault(require("./ProxySubject"));
const proxySubject = new ProxySubject_1.default();
console.log(proxySubject.request());
console.log(proxySubject.request());
