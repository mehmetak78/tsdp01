import IFlyweight from "./IFlyweight";

export default class Flyweight implements IFlyweight {
    code: number;
    constructor(code: number) {
        this.code = code;
    }
}