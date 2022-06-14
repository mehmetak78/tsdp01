import ISubject from "./ISubject";

export default class RealSubject implements ISubject {
    enormousData: number[];
    constructor() {
        this.enormousData = [1,2,3];
    }

    request() {
        return this.enormousData;
    }
}