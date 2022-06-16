import Colleague1 from "./Colleague1";
import Colleague2 from "./Colleague2";

export default class Mediator {
    colleague1: Colleague1;
    colleague2: Colleague2;

    constructor() {
        this.colleague1 = new Colleague1();
        this.colleague2 = new Colleague2();
    }
    colleague1Method() {
        return this.colleague1.method1();
    }
    colleague2Method() {
        return this.colleague2.method2();
    }

}
