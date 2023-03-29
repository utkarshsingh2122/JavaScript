// map method :- Creates a new array by performing some operation on each array element .
let arr = [45, 23, 21]
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(a)

// Output will 45 0 [45 , 23 ,21]
//             24 1 [45 , 23 ,21]
//             23 2 [45 , 23 , 21]
//                  [45 , 24 , 23]
// We use map when we have to create a new array and
// we use Foreach if we have to perform any operation on each array element


//  Filter method in Arry :- Filters an array with calues that passes a test . Creates a new array

let arr2 = [45, 23, 64, 4, 3, 2]
let a2 = arr2.filter((a) => {
    return a < 10
})
console.log(a2)

Output: -[4, 3, 2]

// Reduce method in array :- Reduces an array to a single value

let arr3 = [1, 2, 3, 5, 2, 1]
let newarr3 = arr3.reduce((h1, h2) => {
    return h1 + h2
})
console.log(newarr3)

Output: -14