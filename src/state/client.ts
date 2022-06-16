import StateContext from "./StateContext";
import {ExampleStateEnum} from "./ExampleStateEnum";

const stateContext = new StateContext();

console.log('State Context: ' + stateContext.state);

stateContext.state = ExampleStateEnum.Started;
stateContext.request();
stateContext.state = ExampleStateEnum.Running;
stateContext.request();
stateContext.state = ExampleStateEnum.Finished;
stateContext.request();
