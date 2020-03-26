"use strict";
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(data) {
        this.data = data;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.data[index];
    };
    return ArrayOfAnything;
}());
var test = new ArrayOfAnything(['a', 'b', 'c', 11]);
function printAnything(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything(['a', 'b', 1, true]);
var PrintHouse = /** @class */ (function () {
    function PrintHouse() {
    }
    PrintHouse.prototype.print = function () {
        console.log('house');
    };
    return PrintHouse;
}());
var PrintCar = /** @class */ (function () {
    function PrintCar() {
    }
    PrintCar.prototype.print = function () {
        console.log('car');
    };
    return PrintCar;
}());
function printClass(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
printClass([new PrintHouse(), new PrintHouse()]);
