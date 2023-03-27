// Functions
// older function

function first(x, y) {
    console.log("Done")
    return 1 + (x + y) / 2
}
let a = 1;
let b = 2;
let c = 3;

console.log("One plus average of a and b is ", first(a, b))
console.log("One plus average of a and b is ", first(b, c))
console.log("One plus average of a and b is ", first(a, c))

// new gen function

const hello = () => {
    console.log("Hey how are you . ")
}
console.log(hello())