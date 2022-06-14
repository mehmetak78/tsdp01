import IExpression from "./IExpression";

export default class Numeral implements IExpression {
    value: number;

    constructor(value: string) {
        this.value = parseInt(value);
    }

    interpret(): number {
        return this.value;
    }
}