import IImplementer from "./IImplementer";

export default class ConcreteImplementerA implements IImplementer {

    method(value: string[]): void {
        console.log(value)
    }

}