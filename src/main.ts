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
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({ name: 'John' }))
console.log(isTrue([]))
console.log(isTrue([1, 2, 3]))
console.log(NaN)
console.log(isTrue(-0))

interface BoolCheck<T> {
  value: T
  is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) return { value: arg, is: false }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false }
  }
  return { value: arg, is: !!arg }
}

interface HasId {
  id: string
}

const processUser = <T extends HasId>(user: T): T => {
  return user
}

console.log(processUser({ id: '123', name: 'John', age: 30 }))

const getUsersProperty = <T extends HasId, K extends keyof T>(
  user: T[],
  key: K
): T[K][] => {
  return user.map((user) => user[key])
}

class User {
  id: string
  name: string
  age: number

  constructor(id: string, name: string, age: number) {
    this.id = id
    this.name = name
    this.age = age
  }
}
// and it ends
