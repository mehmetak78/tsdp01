import Memento from "./Memento";

export default class Originator {
    #state: string;

    constructor() {
        this.#state = '';
    }

    public get state(): string {
        return this.#state;
    }

    public set state(value: string) {
        this.#state = value;
        console.log(`Originator: Set state to '${value}' `)
    }

    public get memento(): Memento {
        console.log('Originator: Providing Memento of state to caretaker.');
        return new Memento(this.#state);
    }

    public set memento(value: Memento) {
        this.#state = value.state;
        console.log(`Orignator: State after restoring from Memento: ${this.#state}`);
    }
}
