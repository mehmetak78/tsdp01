import IComponent from "./IComponent";

export default class Decorator implements IComponent {

    constructor(private object: IComponent) {}

    method(): string {
        return `Decorated Method (${this.object.method()})`;
    }
}

