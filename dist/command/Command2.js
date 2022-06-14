"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command2 {
    constructor(receiver) {
        this.receiver = receiver;
    }
    execute() {
        this.receiver.runCommand2();
    }
}
exports.default = Command2;
