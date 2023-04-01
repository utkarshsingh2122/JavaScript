// nn bb ss u - Primitive in js
let a = null;
let b = 345;
let c = true;
let d = BigInt("567");
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof d)

// Non Primitive - Objects :- We can make key value pairs
const item = {
    "Harry": true,
    "Shubh": false,
    "Lovish": 67,
}
console.log(item["Shubh"])