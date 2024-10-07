import { uppercaseString as test1, lowercaseString as test2 } from "./module2.js";


test1("hello");
test2("WORLD!");

console.log(test1("hello"), test2("WORLD"));