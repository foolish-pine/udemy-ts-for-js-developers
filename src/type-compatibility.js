"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fooCompatible;
var barCompatible = "TypeScript";
console.log(typeof fooCompatible);
fooCompatible = barCompatible;
console.log(typeof fooCompatible);
var fooIncompatible;
var barIncompatible = 1;
// fooIncompatible = barIncompatible
var fooString;
var barString = "string";
fooString = barString;
