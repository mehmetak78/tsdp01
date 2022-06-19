import AbstractClass from "./AbstractClass";

export default class ConcreteClassA extends AbstractClass{
    stepTwo() {
        console.log('ClassA : Step Two overriden');
    }
}
