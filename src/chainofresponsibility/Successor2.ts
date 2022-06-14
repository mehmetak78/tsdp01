import IHandler from "./IHandler";
import Successor1 from "./Successor1";

export default class Successor2 implements IHandler {
    handle(payload: number): number {
        console.log(`Successor 2 payload = ${payload}`);
        const test = Math.floor(Math.random()*3)+1;
        if (test === 1) {
            payload *=2;
            payload = new Successor1().handle(payload)
        }
        else if (test === 2) {
            payload /= 2;
            payload = new Successor2().handle(payload)
        }
        return payload;
    }
}