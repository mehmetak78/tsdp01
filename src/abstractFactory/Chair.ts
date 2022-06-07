import IChair from "./IChair";
import {dimension} from "./Dimension";

export default class Chair implements IChair {
    name = "";
    height = 0;
    width = 0;
    depth = 0;

    getDimensions(): dimension {
        return {
            width: this.width,
            height: this.height,
            depth: this.depth
        }
    }
}
