import IglooDirector from "./IglooDirector";
import CastleDirector from "./CastleDirector";
import HouseBoatDirector from "./HouseBoatDirector";

const igloo = IglooDirector.construct();
const castle = CastleDirector.construct();
const houseBoat = HouseBoatDirector.construct();

console.log(igloo.getConstruction())
console.log(castle.getConstruction())
console.log(houseBoat.getConstruction())

