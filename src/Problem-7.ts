// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car{

    constructor(public name: string, public model: string, public age:number ){
    }
    getCarAge(){
        const currentAge = new Date().getFullYear();
        return currentAge - this.age
    }
}

/**
 * By input this values you will get the out put.
 */

// const car= new Car('Honda', 'Civic', 2018);
// console.log(car.getCarAge())