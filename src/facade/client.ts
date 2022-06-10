import Facade from "./Facade";

const facadeObj = new Facade();

console.log(facadeObj.subClassA());
console.log(facadeObj.subclassB("Method of Class B"));
console.log(facadeObj.subClassC({n:[1,2,3]}));
