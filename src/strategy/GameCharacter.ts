import IMoveConstructor from "./IMoveConstructor";

export default class GameCharacter {
    private position : [number, number] = [0,0];

    move(MovementStyle: IMoveConstructor) {
        new MovementStyle().move(this.position);
    }
}
