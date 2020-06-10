"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Me = /** @class */ (function () {
    function Me() {
    }
    Me.work = function () {
        return "Hey Guys! This is " + this.firstName + " Are you interested in TypeScript? Let'S dive into TS!";
    };
    Me.isProgrammer = true;
    Me.firstName = "Taro";
    Me.lastName = "Yamada";
    return Me;
}());
console.log(Me.isProgrammer);
console.log(Me.work());
