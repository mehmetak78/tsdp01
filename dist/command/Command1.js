"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command1 {
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.runCommand1();
    }
}
exports.default = Command1;
