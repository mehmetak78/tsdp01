"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IteratorConcept {
    constructor(aggregates) {
        this.index = 0;
        this.aggregates = aggregates;
    }
    next() {
        if (this.index < this.aggregates.length) {
            const aggregate = this.aggregates[this.index];
            this.index++;
            return aggregate;
        }
        throw new Error('At End of Iterator');
    }
    hasNext() {
        return this.index < this.aggregates.length;
    }
}
exports.default = IteratorConcept;
