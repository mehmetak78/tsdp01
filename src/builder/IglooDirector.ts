import HouseBuilder from "./HouseBuilder";
import House from "./House";

export default class IglooDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType("Igloo")
            .setWallMaterial("Ice")
            .setNumberDoors(1)
            .getResult();
    }
}
