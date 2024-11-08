// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

function removeDuplicates(arr: number[]): number[]{
    const output=[...new Set(arr)];
    return output.sort()
}




/**
 * By input this array you will get the output.
 */
// const newOutput= removeDuplicates([1,2,4,3,5,2,5,8,2])
// console.log(newOutput)