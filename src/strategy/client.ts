import GameCharacter from "./GameCharacter";
import Walking from "./Walking";
import Sprinting from "./Sprinting";
import Crawling from "./Crawling";

const gameCharacter = new GameCharacter();
gameCharacter.move(Walking)
gameCharacter.move(Sprinting)
gameCharacter.move(Crawling)


