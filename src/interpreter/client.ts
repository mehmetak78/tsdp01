import IExpression from "./IExpression";
import Numeral from "./Numeral";
import Add from "./Add";
import Subtract from "./Subtract";
import Subject from "../observer/Subject";


const sentence = '5 + 4 - 3 + 7 - 2';
console.log(sentence);

const tokens = sentence.split(' ');
console.log(JSON.stringify(tokens));

const expressions: IExpression[] = [];

expressions.push(new Add(new Numeral(tokens[0]), new Numeral(tokens[2])));
expressions.push(new Subtract(expressions[0], new Numeral(tokens[4])));
expressions.push(new Add(expressions[1], new Numeral(tokens[6])));
expressions.push(new Subtract(expressions[2], new Numeral(tokens[8])));


const expressionsRoot = expressions.pop();

console.log((expressionsRoot as IExpression).interpret());
console.dir(expressionsRoot, {depth: null});