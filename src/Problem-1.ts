// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(numbers:number[]):number{
    return numbers.reduce((digit, num)=> digit + num, 0)
}


/**By input this array you will get the output */
// const newArr= sumArray([10,15,20,25,30])
// console.log(newArr)