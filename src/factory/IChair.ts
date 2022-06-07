import {dimension} from "./Dimension";

export default interface IChair {
    height: number;
    width: number;
    depth: number;
    getDimension(): dimension;
}
