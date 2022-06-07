import IChair from "./IChair";
import BigChair from "./BigChair";
import MediumChair from "./MediumChair";
import SmallChair from "./SmallChair";

export default class ChairFactory {
    static createChair(chairType: "BigChair"| "MediumChair" | "SmallChair"): IChair {
        switch (chairType) {
            case "BigChair" :
                return new BigChair();
            case "MediumChair" :
                return new MediumChair();
            case "SmallChair" :
                return new SmallChair()
        }
    }
}
