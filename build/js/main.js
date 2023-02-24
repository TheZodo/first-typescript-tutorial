"use strict";
//literal types
let myName;
let userName;
userName = "Bob";
//function types
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));
logMsg(add(7, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface MathFunc {(a: number, b: number):number;}
let multiply = function (c, d) {
    return c * d;
};
console.log(multiply(2, 3));
//optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default parameters
const sumAll = (a = 2, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
//rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
