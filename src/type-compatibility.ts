export {};

let fooCompatible: any;
let barCompatible: string = "TypeScript";

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible

let fooString: string;
let barString: string = "string";

fooString = barString;
