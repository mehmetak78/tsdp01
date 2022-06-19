import IMove from "./IMove";

export default class Crawling implements IMove {
    move(position: [number, number]) {
        position[0] += 0.5;
        console.log(`I'm crawling. New Position: ${position}`)
    }
}
