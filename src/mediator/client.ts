import Mediator from "./Mediator";

const mediator = new Mediator();

let data = mediator.colleague1Method();
console.log(data);

data = mediator.colleague2Method();
console.log(data)
