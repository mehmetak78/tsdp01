"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RealSubject_1 = __importDefault(require("./RealSubject"));
class ProxySubject {
    constructor() {
        this.enormousData = [];
        this.realSubject = new RealSubject_1.default();
    }
    request() {
        if (this.enormousData.length === 0) {
            console.log("Pulling data from RealObject");
            this.enormousData = this.realSubject.request();
            return this.enormousData;
        }
        console.log("Pulling data from Proxy cache");
        return this.enormousData;
    }
}
exports.default = ProxySubject;
