"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VisaCard = /** @class */ (function () {
    function VisaCard(owner) {
        this.owner = owner;
    }
    return VisaCard;
}());
var myVisaCard = new VisaCard("Pine");
console.log(myVisaCard.owner);
