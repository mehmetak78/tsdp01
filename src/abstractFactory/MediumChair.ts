import Chair from "./Chair";

export default class MediumChair extends Chair {
    constructor() {
        super();
        this.name = 'MediumChair';
        this.width = 60;
        this.depth = 60;
        this.height = 60;
    }
}
