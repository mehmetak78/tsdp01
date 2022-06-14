import AppContext from "./AppContext";
import {FlyweightFactory} from "./FlyweightFactory";

const appContext = new AppContext("abracadabra");
console.log(appContext.output())

console.log(`abracadabra has ${'abracadabra'.length} letters`);
console.log(`FlyweightFactory has ${FlyweightFactory.getCount()} flyweights`);