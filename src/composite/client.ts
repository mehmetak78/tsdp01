import Folder from "./Folder";
import File from "./File";

const fileSystem = new Folder("root");
const file1 = new File("File1");
const file2 = new File("File 2");
fileSystem.attach(file1);
fileSystem.attach(file2);
const folderA = new Folder("Folder A");
fileSystem.attach(folderA);
const file3 = new File("File3");
folderA.attach(file3);
const folderB = new Folder("folder B");
const file4 = new File("File 4");
folderB.attach(file4);
fileSystem.attach(folderB);
fileSystem.dir("");

console.log();
folderB.attach(folderA);
fileSystem.dir("");

