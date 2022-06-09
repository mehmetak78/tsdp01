import BigDocument from "./BigDocument";

const orjDocument = new BigDocument("Orjinal",[[1,2,3,4],[5,6,7,8]]);

console.log(orjDocument);

console.log("Copy 1 -------------")
const copyDoc1 = orjDocument.clone(1);  // shallow copy
copyDoc1.name = "Copy 1";
copyDoc1.array[1][2] = 111;
console.log(orjDocument);
console.log(copyDoc1);

console.log("Copy 2 -------------")
const copyDoc2 = orjDocument.clone(1);  // shallow copy
copyDoc2.name = "Copy 2";
copyDoc2.array[1][2] = 222;
console.log(orjDocument);
console.log(copyDoc2);

console.log("Copy 3 -------------")
const copyDoc3 = orjDocument.clone(2);  // deep copy
copyDoc3.name = "Copy 3";
copyDoc3.array[1][2] = 333;
console.log(orjDocument);
console.log(copyDoc3);