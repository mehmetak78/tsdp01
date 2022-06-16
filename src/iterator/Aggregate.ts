import IAggregate from "./IAggregate";

export default class Aggregate implements IAggregate {
    method(): void {
        console.log('This method has been invoked');
    }
}