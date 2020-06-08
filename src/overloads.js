"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function double(value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else {
        return value + value;
    }
}
// function double(value: string): string {
//   return value + value;
// }
console.log(double(356));
