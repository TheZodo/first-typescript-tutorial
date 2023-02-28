const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean =>
  typeof arg === 'object' && Array.isArray(arg) === false
