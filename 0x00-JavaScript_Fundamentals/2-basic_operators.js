//Assignment 
/* Types of Operators - https://www.w3schools.com/js/js_operators.asp
- Arithmetic Operators or Mathematical Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Conditional Operators - example is the tenary, greater than, less than operator. etc
- Type Operators
Operator Precedence - https://www.w3schools.com/js/js_precedence.asp
*/
const halfPopulation = population / 2;
console.log(halfPopulation);
population++; //increase population by 1
console.log(population);
const populationFinland = 6;
console.log(population > populationFinland);
console.log(33 > population);
let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);
//using strings and template literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);