"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Mahotsukai = /** @class */ (function () {
    function Mahotsukai() {
    }
    return Mahotsukai;
}());
var Souryo = /** @class */ (function () {
    function Souryo() {
    }
    return Souryo;
}());
var Taro = /** @class */ (function (_super) {
    __extends(Taro, _super);
    function Taro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Taro;
}(Mahotsukai));
var Jiro = /** @class */ (function () {
    function Jiro() {
    }
    Jiro.prototype.ionazun = function () {
        console.log("ionazun");
    };
    Jiro.prototype.kougeki = function () {
        console.log("kougeki");
    };
    return Jiro;
}());
