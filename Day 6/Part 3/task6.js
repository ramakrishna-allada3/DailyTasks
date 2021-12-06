// Fix the code to sum the number in that array

// Code:

// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// const sum = (a, b) =>
//  a + b
// const sum = num.reduce(sum)
// console.log(sum);




// Solution
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) => a + b
const total = num.reduce(sum)
console.log(total);