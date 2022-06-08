import House from "./House";
import HouseBuilder from "./HouseBuilder";

export default class CastleDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType("Castle")
            .setWallMaterial("SAndstone")
            .setNumberDoors(100)
            .setNumberWindows(200)
            .getResult();
    }
}
