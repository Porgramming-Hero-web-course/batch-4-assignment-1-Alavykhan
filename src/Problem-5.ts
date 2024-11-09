// Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

type personType ={
    name: string;
    age: number;
}

function getProperty<T, Q extends keyof T>(person: T, key: Q):T[Q]{
    return person[key]
}


/**
 * By input these values you will get the output
 */
// const person: personType ={
//     name: 'ak',
//     age: 31
// }

// console.log(getProperty(person, 'age'))