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
logMsg(add('a ',3));