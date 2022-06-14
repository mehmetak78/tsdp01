"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Folder_1 = __importDefault(require("./Folder"));
const File_1 = __importDefault(require("./File"));
const fileSystem = new Folder_1.default("root");
const file1 = new File_1.default("File1");
const file2 = new File_1.default("File 2");
fileSystem.attach(file1);
fileSystem.attach(file2);
const folderA = new Folder_1.default("Folder A");
fileSystem.attach(folderA);
const file3 = new File_1.default("File3");
folderA.attach(file3);
const folderB = new Folder_1.default("folder B");
const file4 = new File_1.default("File 4");
folderB.attach(file4);
fileSystem.attach(folderB);
fileSystem.dir("");
console.log();
folderB.attach(folderA);
fileSystem.dir("");