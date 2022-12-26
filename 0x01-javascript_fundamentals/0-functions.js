'use strict'; //necessary from now on
//[] - Keyword
/* format of a function declaration
[function] functionName(values the function will recieve){
    code block of what the function will do
    [return] codeBlock; - what the code will return
}
*/
/* format of a function expression
[const] variableName = [function](values the function will recieve){
    code block of what the function will do
    [return] codeBlock; - what the code will return
}
*/
//assignment
function describeCountry(country, population, capitalCity){
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}
//invoking / calling / running the function ⬇️
const Nigeria = describeCountry("Nigeria", 200, "Abuja");
const Finland = describeCountry("Finland", 6, "Helsinki");
const Ghana = describeCountry("Ghana", 30, "Accra");