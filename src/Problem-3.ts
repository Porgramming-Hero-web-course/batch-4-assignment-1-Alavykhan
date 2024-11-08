// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(sentence: string, word:string){
    return sentence.split(word).length-1
}


/**
 * By insert this input you will you get the output
 */
// const output= countWordOccurrences("I love typescript", "typescript")
// console.log(output)