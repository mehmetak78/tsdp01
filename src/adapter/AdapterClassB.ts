import ClassB from "./ClassB";
import IA from "./IA";

export default class AdapterClassB implements IA {

    private objB: ClassB;

    constructor() {
        this.objB = new ClassB();
    }

    methodA() {
        this.objB.methodB();
    }
}
