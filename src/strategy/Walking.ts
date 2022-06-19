import IMove from "./IMove";

export default class Walking implements IMove {
    move(position: [number, number]) {
        position[0] += 1;
        console.log(`I'm walking. New Position: ${position}`)
    }
}
