"use strict";
let stringArr = ['a', 'b', 'c'];
stringArr.unshift('d');
let myTuple = ['a', 1];
let myObj;
myObj = [];
console.log(typeof myObj);
const exampleObject = {
    prop1: 'malaizyo',
    prop2: true,
};
let evh = {
    name: 'Eddie Van Halen',
    active: true,
    albums: [1984, '5150', 'For Unlawful Carnal Knowledge']
};
let JP = {
    name: 'Joe Perry',
    active: false,
    albums: ['Rockin\' the Joint', 'Rocks', 'Let the Music Do the Talking']
};
evh = JP;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return 'Hello';
};
console.log(greetGuitarist(evh));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
