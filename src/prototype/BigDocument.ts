import IProtoType from "./IProtoType";

export default class BigDocument implements  IProtoType {
    //name: string;
    //array: [number[], number[]];

    constructor(public  name: string, public array: [number[], number[]]) {}

    clone(mode: number): BigDocument {
        let array;
        if (mode === 2) {
            // deep copy
            array = JSON.parse(JSON.stringify(this.array));
        }
        else {
            // shallow copy
            array = Object.assign([], this.array)
        }
        return new BigDocument(this.name, array)
    }


}