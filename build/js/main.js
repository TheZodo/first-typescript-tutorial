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
    if (typeof c !== "undefined") {
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
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
//type guards
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//Never type being used
const numberOrString = (a) => {
    if (typeof a === "number")
        return "number";
    if (typeof a === "string")
        return "string";
    return createError("Not a number or string");
};
