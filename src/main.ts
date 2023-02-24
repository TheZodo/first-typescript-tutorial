//type aliases
type StringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string,
  active: boolean,
  albums: stringOrNumberArray
}
