import IExampleState from "./IExampleState";
import {ExampleStateEnum} from "./ExampleStateEnum";
import StartedState from "./StartedState";
import RunningState from "./RunningState";
import FinishedState from "./FinishedState";

export default class StateContext implements IExampleState {
    readonly #state: ExampleStateEnum;

    request() {};

    constructor() {
        this.#state = ExampleStateEnum.Initializing;
    }

    public get state() {
        return this.#state;
    }

    public set state(value: ExampleStateEnum) {
        switch (value) {
            case ExampleStateEnum.Started:
                this.request = StartedState.prototype.request;
                break;
            case ExampleStateEnum.Running:
                this.request = RunningState.prototype.request;
                break;
            case ExampleStateEnum.Finished:
                this.request = FinishedState.prototype.request;
                break;
        }
    }
}
