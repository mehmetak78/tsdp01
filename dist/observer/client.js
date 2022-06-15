"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __importDefault(require("./Subject"));
const Observer_1 = __importDefault(require("./Observer"));
let counter = 1;
const subject = new Subject_1.default();
const observer1 = new Observer_1.default(subject, counter++);
const observer2 = new Observer_1.default(subject, counter++);
subject.changeStateAndNotify('First Notification', [1, 2, 3]);
subject.unsubscribe(observer2);
subject.changeStateAndNotify('Second Notification', { A: 1, B: 2, C: 3 });
subject.subscribe(observer2);
subject.changeStateAndNotify('Third Notification', 'subscribed again');
