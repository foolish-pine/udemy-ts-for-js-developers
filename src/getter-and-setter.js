"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyNumberCard = /** @class */ (function () {
    function MyNumberCard(owner, secretNumber) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }
    Object.defineProperty(MyNumberCard.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyNumberCard.prototype, "secretNumber", {
        set: function (secretNumber) {
            this._secretNumber = secretNumber;
        },
        enumerable: true,
        configurable: true
    });
    MyNumberCard.prototype.debugPrint = function () {
        return "secretNumber: " + this._secretNumber;
    };
    return MyNumberCard;
}());
var card = new MyNumberCard("Pine", 1234567890);
console.log(card.owner);
console.log(card.secretNumber);
card.secretNumber = 987654321;
console.log(card.debugPrint());
