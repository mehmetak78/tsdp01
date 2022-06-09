
export default class Singleton {

    static instance: Singleton;

    constructor(public id: number) {
        if (Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = this;
    }

}