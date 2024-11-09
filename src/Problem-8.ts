// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

const person={
    name:'alavy',
    email:'alavykhan01@gmail.com',
    age: 31
}

function validateKeys<T extends object>(obj:T, keys: (keyof T)[]):boolean{
    return keys.every(key=>key in obj)
}

console.log(validateKeys(person, ['name', 'email']))