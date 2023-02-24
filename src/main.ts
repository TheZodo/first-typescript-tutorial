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

interface Guitarist {
  name?: string,
  active: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie Van Halen',
  active: true,
  albums:[1984, '5150', 'For Unlawful Carnal Knowledge']
}

let JP: Guitarist = {
  name: 'Joe Perry',
  active: false,
  albums: ['Rockin\' the Joint', 'Rocks', 'Let the Music Do the Talking']
}

evh = JP

const greetGuitarist = (guitarist: Guitarist) => {
  if(guitarist.name){
    return `Hello ${guitarist.name.toUpperCase()}`
  }
  return 'Hello'
}

console.log(greetGuitarist(evh))

// Enums
enum Grade{
  U = 1,
  D,
  C,
  B,
  A
}

console.log(Grade.U)