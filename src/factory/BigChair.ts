import Chair from "./Chair";

export default class BigChair extends  Chair {
    constructor() {
        super();
        this.depth = 80;
        this.width = 80;
        this.height = 80;
    }
}
