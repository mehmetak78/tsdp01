import IVisitor from "./IVisitor";
import Part from "./Part";

export default class CalculatePartTotalsVisitor implements IVisitor {
    totalValue = 0;
    visit(part: Part) {
        this.totalValue += part.value;
    }
}
