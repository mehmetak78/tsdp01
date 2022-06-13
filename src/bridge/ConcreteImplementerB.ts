import IImplementer from "./IImplementer";

export default class ConcreteImplementerB implements IImplementer {
    method(value: string[]): void {
        value.forEach(v => console.log(v));
    }
}

