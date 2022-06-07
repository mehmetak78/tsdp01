import IChair from "./IChair";
import {dimension} from "./Dimension";

export default class Chair implements IChair {
    height = 0;
    width = 0;
    depth = 0;

    getDimension(): dimension {
        return {
            width: this.width,
            height: this.height,
            depth: this.depth
        }
    }
}
