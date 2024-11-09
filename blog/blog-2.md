Question: The significance of union and intersection types in Typescript

Answer: Typescript is strongly typed programming language over JavaScript, it provides better tooling skills then JS. Which helps the developer write the and maintain the code, as a result code become error free, clean and easy to understand.

In a verity of tools union and intersection types are one of them. These tools helps to hold the values of multiple types.

Union types in typescript allow us to defined a variable or parameter from various types, which provides flexibility and better error handling. To create an union type we use '|' operator between the parameters.
Example: type example1= string | number;

On the over hand intersection types are quit similar to union types but it carries both side values in one type ensuring that a value satisfies all the constraints of the combined types. To create intersection types we use '&' operator.

Example: type example2 = string & boolean;
