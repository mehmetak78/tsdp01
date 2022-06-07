import FurnitureFactory from "./FurnitureFactory";

let furniture = FurnitureFactory.createFurniture("SmallChair");
console.log(furniture?.name);
console.log(furniture?.getDimensions());

furniture = FurnitureFactory.createFurniture("BigTable");
console.log(furniture?.name);
console.log(furniture?.getDimensions());
