import {dimension} from "./Dimension";

export default interface ITable {
    name: string;
    height: number;
    width: number;
    depth: number;

    getDimensions(): dimension;
}
