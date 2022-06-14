import Receiver from "./Receiver";
import Command1 from "./Command1";
import Command2 from "./Command2";
import Invoker from "./Invoker";

const receiver = new Receiver();

const command1 = new Command1(receiver);
const command2 = new Command2(receiver);

const invoker = new Invoker();

invoker.register("1", command1);
invoker.register("2", command2);

invoker.execute("1");
invoker.execute("2");
invoker.execute("1");
invoker.execute("2");
