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
let multiply = function (c, d) {
    return c * d;
};
console.log(multiply(2, 3));
