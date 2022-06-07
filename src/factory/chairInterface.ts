import {dimension} from "./dimension";

export default interface IChair {
    height: number;
    width: number;
    depth: number;
    getDimension(): dimension;
}
