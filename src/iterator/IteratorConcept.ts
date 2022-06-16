import IIterator from "./IIterator";
import IAggregate from "./IAggregate";

export default class IteratorConcept implements IIterator {
   public index: number;
    aggregates: IAggregate[];

    constructor(aggregates: IAggregate[]) {
        this.index = 0;
        this.aggregates = aggregates;
    }

    next(): IAggregate {
        if (this.index < this.aggregates.length) {
            const aggregate = this.aggregates[this.index];
            this.index++;
            return aggregate;
        }
        throw new Error('At End of Iterator');
    }

    hasNext(): boolean {
        return this.index < this.aggregates.length;
    }
}