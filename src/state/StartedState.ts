import IExampleState from "./IExampleState";

export default class StartedState implements IExampleState {
    request(): void {
        console.log('I am now in Started State');
    }
}
