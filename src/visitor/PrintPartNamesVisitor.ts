import IVisitor from "./IVisitor";
import Part from "./Part";

export default class PrintPartNamesVisitor implements IVisitor {
    visit(part: Part) {
        console.log(part.name)
    }
}
