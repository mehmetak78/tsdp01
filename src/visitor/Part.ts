import IVisitable from "./IVisitable";
import IVisitor from "./IVisitor";

export default class Part implements IVisitable {
    name: string;
    value: number;
    parts: Set<Part>;

    constructor(name: string, value: number, parent?: Part) {
        this.name = name;
        this.value = value;
        this.parts = new Set();
        if (parent) {
            parent.parts.add(this);
        }
    }

    accept(visitor: IVisitor) {
        this.parts.forEach(part => {
            part.accept(visitor)
        })
        visitor.visit(this);
    }
}
