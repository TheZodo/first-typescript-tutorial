let stringArr = ['a', 'b', 'c'];

stringArr.unshift('d');

let myTuple: [string, number] = ['a', 1];

let myObj: object
myObj = []
console.log(typeof myObj)

const exampleObject = {
  prop1: 'malaizyo',
  prop2: true,
}

type Guitarist = {
  name: string,
  active: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie Van Halen',
  active: true,
  albums:[1984, '5150', 'For Unlawful Carnal Knowledge']
}