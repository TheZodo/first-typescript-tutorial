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
    var _a;
    console.log(`Hello ${guitarist.name}`);
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
console.log(greetGuitarist(evh));
