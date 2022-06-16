import IExampleState from "./IExampleState";

export default class FinishedState implements IExampleState {
    request(): void {
        console.log('I am now in Finished State');
    }
}
