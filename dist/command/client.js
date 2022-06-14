"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Receiver_1 = __importDefault(require("./Receiver"));
const Command1_1 = __importDefault(require("./Command1"));
const Command2_1 = __importDefault(require("./Command2"));
const Invoker_1 = __importDefault(require("./Invoker"));
const receiver = new Receiver_1.default();
const command1 = new Command1_1.default(receiver);
const command2 = new Command2_1.default(receiver);
const invoker = new Invoker_1.default();
invoker.register("1", command1);
invoker.register("2", command2);
invoker.execute("1");
invoker.execute("2");
invoker.execute("1");
invoker.execute("2");
