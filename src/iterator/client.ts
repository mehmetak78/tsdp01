import Aggregate from "./Aggregate";
import IteratorConcept from "./IteratorConcept";

const aggregates = [
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
    new Aggregate()
]

const iterable = new IteratorConcept(aggregates);

while (iterable.hasNext()) {
    iterable.next().method();
}