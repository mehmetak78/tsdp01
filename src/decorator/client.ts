import Component from "./Component";
import Decorator from "./Decorator";

const component = new Component();
console.log(component.method());

const decoratedComp = new Decorator(component);
console.log(decoratedComp.method());

const additionalDecoratedComp = new Decorator(decoratedComp);
console.log(additionalDecoratedComp.method())
