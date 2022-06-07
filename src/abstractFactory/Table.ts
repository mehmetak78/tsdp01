import ITable from "./ITable";
import {dimension} from "./Dimension";

export default class Table implements ITable {
    name = "";
    depth = 0;
    height= 0;
    width = 0;

    getDimensions(): dimension {
        return {
            width: this.width,
            height: this.height,
            depth: this.depth
        }
    }

}
