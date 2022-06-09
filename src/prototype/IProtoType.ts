
import BigDocument from "./BigDocument";

export default interface IProtoType {
    clone(mode: number): BigDocument;
}