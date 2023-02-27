"use strict";
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const Malaizyo = new Coder('Malaizyo', 'Rap', 20, 'JavaScript');
console.log(Malaizyo.getAge());
// console.log(Malaizyo.lang)
// console.log(Malaizyo.age)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.name = name;
        this.computer = computer;
    }
    getLang() {
        return `I'm a ${this.lang} developer`;
    }
}
const Sara = new WebDev('MacBook', 'Sara', 'Pop', 20);
console.log(Sara.getLang());
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Zodo = new Peeps('Zodo');
const Zozo = new Peeps('Zozo');
const Koko = new Peeps('Koko');
console.log(Peeps.getCount());
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
}
