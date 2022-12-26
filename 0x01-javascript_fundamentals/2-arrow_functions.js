//assignment
//Arrow functions - arrow functions is to help in quick one line functions
/*format 
[const] varName = functionName => what you want to return;
OR
[const] varName = (functionName) => {what you want to return}; //this is for bulk lines of codes
*/
const percentageOfWorld3 = population => (population/7900) * 100;
const percentageChina3 = percentageOfWorld3(1441);
const percentageNigeria3 = percentageOfWorld3(200);
const percentageGhana3 = percentageOfWorld3(30);
console.log(percentageChina3, percentageNigeria3, percentageGhana3);