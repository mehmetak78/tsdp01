import Originator from "./Originator";
import Memento from "./Memento";

export default class CareTaker{

    private originator: Originator;
    private readonly mementos: Memento[];

    constructor(originator: Originator) {
        this.originator = originator;
        this.mementos = [];
    }

    create() {
        console.log("CareTaker: Getting a copy of Originators current state");
        const memento = this.originator.memento;
        this.mementos.push(memento);
    }

    restore(index: number) {
        console.log('CareTaker: Restoring Originators state from Memento');
        this.originator.memento = this.mementos[index];
    }

}
