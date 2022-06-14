
import Successor1 from "./Successor1";

export default class Chain {
    start(payload: number) {
        return new Successor1().handle(payload)
    }
}