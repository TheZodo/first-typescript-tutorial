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
logMsg(add('a ', 3));
