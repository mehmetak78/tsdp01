import IAbstraction from "./IAbstraction";
import IImplementer from "./IImplementer";

export default class RefinedAbstractionA implements IAbstraction {

    constructor(private implementer: IImplementer) {}

    method(value: string[]): void {
        this.implementer.method(value);
    }

}