import IHandler from "./IHandler";
import Successor2 from "./Successor2";

export default class Successor1 implements IHandler {
    handle(payload: number): number {
        console.log(`Successor 1 payload = ${payload}`);
        const test = Math.floor(Math.random() * 2 ) + 1;
        if (test === 1) {
            payload ++;
            payload = new Successor1().handle(payload)
        }
        else {
            payload--;
            payload = new Successor2().handle(payload)
        }
        return payload;
    }
}