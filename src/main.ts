const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
  return typeof arg === 'object' && Array.isArray(arg) === false && arg !== null
}

console.log(isObj(true))
console.log(isObj('string'))
console.log(isObj([1, 2, 3]))
console.log(isObj({ name: 'John' }))
console.log(isObj(null))

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) return { arg, is: false }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false }
  }
  return { arg, is: !!arg }
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('dave'))
console.log(isTrue(''))
console.log(isTrue(null))
