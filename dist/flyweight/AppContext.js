"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FlyweightFactory_1 = require("./FlyweightFactory");
class AppContext {
    constructor(codes) {
        this.codes = [];
        for (let i = 0; i < codes.length; i++) {
            this.codes.push(codes.charCodeAt(i));
        }
    }
    output() {
        let ret = "";
        this.codes.forEach(c => {
            ret = ret + String.fromCharCode(FlyweightFactory_1.FlyweightFactory.getFlyweight(c).code);
        });
        return ret;
    }
}
exports.default = AppContext;
