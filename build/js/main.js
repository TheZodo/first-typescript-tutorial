"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === 'object' && Array.isArray(arg) === false && arg !== null;
};
console.log(isObj(true));
console.log(isObj('string'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
