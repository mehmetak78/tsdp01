import IComponent from "./IComponent";
import Folder from "./Folder";

export default class File implements IComponent {
    name: string;
    referenceToParent?: Folder = undefined;

    constructor(name: string) {
        this.name = name;
    }

    dir (indent: string): void {
        console.log(`${indent}<FILE> ${this.name}`)
    }

    detach() {
        if (this.referenceToParent) {
            this.referenceToParent.delete(this)
        }
    }
}
