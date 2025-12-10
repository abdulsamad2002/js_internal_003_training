// arr = [1,2,3,4,5, "Apple", "Banana", "Mango", ]

// //can pass array, function, objects inside an array

// console.log(arr)


// arr = ["Apple", "Banana", "Watermelon", "Pineapple", "Kiwi"]

// arr.push("Papaya")

// arr.pop()

// arr.unshift("Musk Melon")



// for(a=0; a<arr.length; a++){
//     console.log(arr[a])
// }
// console.log("-------------------------------")

// arr.shift("")

// for(a=0; a<arr.length; a++){
//     console.log(arr[a])
// }


// console.log(arr.includes("Mango"))

// console.log(arr.indexOf("Pineapple"))


// let number = [2, 7,3,9,4, 6,213412,353, 345]

// let newNum = number.filter((n)=> n%2 != 0)

// console.log(newNum)

// array.reduce((accumulator, currentValue)=>{...}, initialValue)

// Term Meaning

// accumulator (acc) => stores the result as the loop continues
// currentValue (val) => Current element of array being processed
// initialValue (initialValue) => starting value for accumulation



const arr = [2,4,6,8,50,30]

// const newArr = arr.map((value)=>{
//     return value*2
// })

// const newArr = arr.filter((value)=>{
//     return value>20
// })

let sum = 0
const newArr = arr.reduce((sum, value)=>{
    return sum+value
})

console.log(newArr)