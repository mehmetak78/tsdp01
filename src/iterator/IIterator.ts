import IAggregate from "./IAggregate";

export default interface IIterator {
    next(): IAggregate;
    hasNext(): boolean;
}