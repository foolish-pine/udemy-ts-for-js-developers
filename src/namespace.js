"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Japanese;
(function (Japanese) {
    var Tokyo;
    (function (Tokyo) {
        var Person = /** @class */ (function () {
            function Person(name) {
                this.name = name;
            }
            return Person;
        }());
        Tokyo.Person = Person;
    })(Tokyo = Japanese.Tokyo || (Japanese.Tokyo = {}));
})(Japanese || (Japanese = {}));
var English;
(function (English) {
    var Person = /** @class */ (function () {
        function Person(firstName, middleName, lastName) {
            this.firstName = firstName;
            this.middleName = middleName;
            this.lastName = lastName;
        }
        return Person;
    }());
    English.Person = Person;
})(English || (English = {}));
var me = new Japanese.Tokyo.Person("Pine");
console.log(me.name);
var michael = new English.Person("Michael", "Joseph", "Jackson");
console.log(michael);
