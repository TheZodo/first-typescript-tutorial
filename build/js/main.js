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
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        return { arg, is: false };
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'John' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(NaN);
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length)
        return { value: arg, is: false };
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: '123', name: 'John', age: 30 }));
const getUsersProperty = (user, key) => {
    return user.map((user) => user[key]);
};
class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
// and it ends
