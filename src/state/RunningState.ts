import IExampleState from "./IExampleState";

export default class RunningState implements IExampleState {
    request(): void {
        console.log('I am now in Running State')
    }
}
