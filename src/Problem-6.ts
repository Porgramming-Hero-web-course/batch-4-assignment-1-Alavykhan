// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile{
    name:string;
    age:number;
    email:string;
}

const myProfile:Profile={
    name: 'alavy khan',
    age: 31, 
    email: 'alavykhan01@gmail.com'
}

type partialUpdate= Partial<Profile>

const newUpdate:partialUpdate={
    age:32
}

function updateProfile(){
 return {...myProfile, ...newUpdate}
}

/**
 * By console.log this function you will get the output.
 */
// console.log(updateProfile())
