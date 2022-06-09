import ClassA from "./ClassA";
import AdapterClassB from "./AdapterClassB";


const objA = new ClassA();
const objB = new AdapterClassB();

const items = [objA, objB];
items.forEach(item => {
    item.methodA();
})
