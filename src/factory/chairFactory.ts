import IChair from "./chairInterface";
import BigChair from "./bigChair";
import MediumChair from "./mediumChair";
import SmallChair from "./smallChair";

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
