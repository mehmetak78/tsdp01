import IHouseBuilder from "./IHouseBuilder";
import House from "./House";

export default class HouseBuilder implements IHouseBuilder {
    house: House;

    constructor() {
        this.house = new House();
    }

    setBuildingType(buildingType: string): this {
        this.house.buildingType = buildingType;
        return this;
    }

    setNumberDoors(doors: number): this {
        this.house.doors = doors;
        return this;
    }

    setNumberWindows(windows: number): this {
        this.house.windows = windows;
        return this;
    }

    setWallMaterial(wallMaterial: string): this {
        this.house.wallMaterial = wallMaterial
        return this;
    }

    getResult(): House {
        return this.house;
    }

}
