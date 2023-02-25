type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Two; // assignment to a less specific type
let c = a as Three; // assignment to a more specific type
