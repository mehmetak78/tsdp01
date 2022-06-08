import House from "./House";

export default interface IHouseBuilder {
    house: House;
    setBuildingType(buildingType: string): this;
    setWallMaterial(wallMaterial: string): this;
    setNumberDoors(doors: number): this;
    setNumberWindows(windows: number): this;
    getResult(): House;
}
