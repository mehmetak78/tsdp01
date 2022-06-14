import IExpression from "./IExpression";

export default class Subtract implements IExpression {

    constructor(private left: IExpression, private right:IExpression) {}

    interpret(): number {
        return this.left.interpret() - this.right.interpret();
    }

}