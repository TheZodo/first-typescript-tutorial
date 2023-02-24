//type aliases
type StringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string,
  active: boolean,
  albums: stringOrNumberArray
}

type UserID = StringOrNumber;

//literal types

let myName: 'Dave'

let userName: 'Dave' | 'Bob' | 'Alice';
userName = "Bob";

//function types

const add = (a: number, b:number ): number =>{
  return a + b;
}

const logMsg = (message:any): void =>{
  console.log(message);
}

logMsg("Hello");
logMsg(add(2,3));
logMsg(add(7,3));

let subtract = function (c: number, d: number): number{
  return c - d;
}

// type MathFunc = (a: number, b: number) => number;
interface MathFunc {(a: number, b: number):number;}

let multiply: MathFunc = function (c,d){
  return c * d;
}

console.log(multiply(2,3));