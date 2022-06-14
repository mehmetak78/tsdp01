"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Invoker {
    constructor() {
        this.commands = {};
    }
    register(commandName, command) {
        this.commands[commandName] = command;
    }
    execute(commandName) {
        if (commandName in this.commands) {
            this.commands[commandName].execute();
        }
        else {
            console.log(`Command [${commandName}] not recognised`);
        }
    }
}
exports.default = Invoker;
