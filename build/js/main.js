"use strict";
let a = "hello";
let b = a; // assignment to a less specific type
let c = a; // assignment to a more specific type
let d = "World";
let e = "World";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return `${a}${b}`;
    }
};
let myVal = addOrConcat(2, 2, "concat");
//be careful
let nextVal = addOrConcat(2, 2, "concat");
//The Dom
const img = document.querySelector("img");
