import ITable from "./ITable";
import IChair from "./IChair";
import ChairFactory from "./ChairFactory";
import TableFactory from "./TableFactory";

interface IFurniture extends ITable, IChair {}

type FurnitureType = "SmallChair"|"MediumChair"|"BigChair"|"SmallTable"|"MediumTable"|"BigTable";

export default class FurnitureFactory  {
    static createFurniture(furnitureType: FurnitureType): IFurniture | undefined {
        try {
            switch (furnitureType) {
              case "SmallChair": case "MediumChair": case "BigChair":  return ChairFactory.createChair(furnitureType);
              case "SmallTable": case "MediumTable": case "BigTable":  return TableFactory.createTable(furnitureType);
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}
