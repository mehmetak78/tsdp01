import Part from "./Part";
import PrintPartNamesVisitor from "./PrintPartNamesVisitor";
import CalculatePartTotalsVisitor from "./CalculatePartTotalsVisitor";

const partA = new Part('A', 101);
const partB = new Part('B', 305, partA);
const partC = new Part('C', 185, partA);
const partD = new Part('D', -30, partB);

partA.accept(new PrintPartNamesVisitor());

const calcTotalVisitor = new CalculatePartTotalsVisitor();
partA.accept(calcTotalVisitor);
console.log(calcTotalVisitor.totalValue);
