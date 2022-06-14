import ISubject from "./ISubject";
import RealSubject from "./RealSubject";

export default class ProxySubject implements ISubject {
    enormousData: number[];
    realSubject: RealSubject;

    constructor() {
        this.enormousData = [];
        this.realSubject = new RealSubject();
    }
    request() {
        if (this.enormousData.length === 0) {
            console.log("Pulling data from RealObject");
            this.enormousData = this.realSubject.request();
            return this.enormousData;
        }
        console.log("Pulling data from Proxy cache");
        return this.enormousData;
    }

}