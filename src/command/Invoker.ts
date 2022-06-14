import ICommand from "./ICommand";


export default class Invoker {
    private commands: { [id: string]: ICommand }

    constructor() {
        this.commands = {};
    }

    register(commandName: string, command: ICommand) {
        this.commands[commandName] = command;
    }

    execute(commandName: string) {
        if (commandName in this.commands) {
            this.commands[commandName].execute();
        }
        else {
            console.log(`Command [${commandName}] not recognised`);
        }
    }
}