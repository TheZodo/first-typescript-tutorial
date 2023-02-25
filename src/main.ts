type One = string
type Two = string | number
type Three = 'hello'

let a: One = 'hello'
let b = a as Two // assignment to a less specific type
let c = a as Three // assignment to a more specific type

let d = <One>'World'
let e = <string | number>'World'

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') {
    return a + b
  } else {
    return `${a}${b}`
  }
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

//be careful
let nextVal: number = addOrConcat(2, 2, 'concat') as number

//The Dom
const img = document.querySelector('img')
const myImg = document.getElementById('#img')
