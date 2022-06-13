import RefinedAbstractionA from "./RefinedAbstractionA";
import ConcreteImplementerA from "./ConcreteImplementerA";
import RefinedAbstractionB from "./RefinedAbstractionB";
import ConcreteImplementerB from "./ConcreteImplementerB";

const values = ['a','b','c'];

const refinedAbstractionA = new RefinedAbstractionA(new ConcreteImplementerA());
refinedAbstractionA.method(values);

const refinedAbstractionB = new RefinedAbstractionB(new ConcreteImplementerB());
refinedAbstractionB.method(values);