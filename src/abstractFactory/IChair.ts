import {dimension} from "./Dimension";

export default interface IChair {
    name: string;
    depth: number;
    width: number;
    height: number;

    getDimensions():dimension;
}
