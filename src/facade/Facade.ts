import SubClassA from "./SubClassA";
import SubClassB from "./SubClassB";
import SubClassC from "./SubClassC";

export default class Facade {
    subClassA(): string {
        return new SubClassA().method();
    }

    subclassB(value: string) {
        return new SubClassB().method(value)
    }

    subClassC(value: {n: number[]}): {n: number[]} {
        return new SubClassC().method(value);
    }
}