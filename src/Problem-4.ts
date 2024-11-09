// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


type Circle ={
    shape:'circle';
    radius: number;
}

type Rectangle ={
    shape:'rectangle';
    height: number;
    width: number;
}

// type newType = Circle | Rectangle;

function calculateShapeArea(shape: Circle | Rectangle){
        if(shape.shape === 'circle'){
            return Math.PI* shape.radius * shape.radius 
        }else if(shape.shape === 'rectangle'){
            return shape.height * shape.width;
        }else{
            throw Error('provide right input to get the result')
        }
}

/**
 * By console log the values you will get the output
 * Code is working properly but there are some error, that can't solve during the assignment. It would be helpful for me, if you give me solution and description of this error. Thanks
 */


// console.log(calculateShapeArea({shape:'circle', radius: 5}))
// console.log(calculateShapeArea({shape:'rectangle', height:5, width:5}))