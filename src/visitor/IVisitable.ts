import IVisitor from "./IVisitor";

export default interface IVisitable {
    accept(visitor: IVisitor): void;
}
