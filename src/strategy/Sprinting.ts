import IMove from "./IMove";

export default class Sprinting implements IMove {
    move(position: [number, number]) {
        position[0] += 2;
        console.log(`I'm Running. New Position: ${position}`)
    }
}
