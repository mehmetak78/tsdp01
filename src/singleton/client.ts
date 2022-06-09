import Singleton from "./Singleton";

const obj1 = new Singleton(1);
const obj2 = new Singleton(2);

console.log(obj1.id);
console.log(obj2.id);
console.log(obj1 === obj2);