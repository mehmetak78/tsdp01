import AbstractClass from "./AbstractClass";

export default class ConcreteClassB extends AbstractClass {
    stepOne() {
        console.log('ClassB : Step One overriden');
    }
    stepTwo() {
        console.log('ClassB : Step Two overriden');
    }
    stepThree() {
        console.log('ClassB : Step THree overriden');
    }
}
