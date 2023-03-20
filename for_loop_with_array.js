let num = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

// for-each loop

num.forEach((element) => {
    console.log(element)
})

// Array.from :- Used to create an array from any other object

let nam = "Utkarsh"
let arr = Array.from(nam)
console.log(arr)

// for....of

for (let i of num) {
    console.log(i)
}

// for.....in :- It gives key
for (let i in num) {
    console.log(num[i])
}