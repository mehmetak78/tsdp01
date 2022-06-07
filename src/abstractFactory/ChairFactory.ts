import IChair from "./IChair";
import SmallChair from "./SmallChair";
import MediumChair from "./MediumChair";
import BigChair from "./BigChair";

export default class ChairFactory {
    static createChair(chairType: "SmallChair"|"MediumChair"|"BigChair"): IChair {
        switch (chairType) {
          case "SmallChair": return new SmallChair();
          case "MediumChair": return new MediumChair();
          case "BigChair": return new BigChair();
          default:
            throw new Error("Chair Not Found");
        }
    }
}
