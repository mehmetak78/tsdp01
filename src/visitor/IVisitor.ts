import Part from "./Part";

export default interface IVisitor {
    visit(part: Part): void;
}
