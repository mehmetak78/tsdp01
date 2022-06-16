import Originator from "./Originator";
import CareTaker from "./CareTaker";

const originator = new Originator();
const careTaker = new CareTaker(originator);

originator.state = 'State 1';
originator.state = 'State 2';
careTaker.create();         // Take backup

originator.state = 'State 3';
careTaker.create();         // Take backup

originator.state = 'State 4';
console.log(originator.state);

careTaker.restore(0);   // Restore backup
console.log(originator.state);

careTaker.restore(1);   // Restore backup
console.log(originator.state);
