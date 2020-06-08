"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bmi = function (height, weight, printable) {
    var bmi = weight / (height * height);
    if (printable) {
        console.log(bmi);
    }
    return bmi;
};
bmi(1.78, 60, true);
