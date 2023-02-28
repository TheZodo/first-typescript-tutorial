"use strict";
const todaysTransactions = {
    Pizza: 10,
    Books: 5,
    Job: 1,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: 'John',
    GPA: 3.5,
};
console.log('hello');
