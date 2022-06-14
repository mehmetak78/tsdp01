import ICommand from "./ICommand";
import Receiver from "./Receiver";

export default class Command2 implements ICommand {
    constructor(private receiver: Receiver) {}

    execute() {
        this.receiver.runCommand2();
    }
}