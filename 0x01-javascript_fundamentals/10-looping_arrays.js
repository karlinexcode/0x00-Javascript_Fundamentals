// Assignment - Looping Arrays, Breaking and Continuing
//percentageOfWorld1(population) - is called from the 2-function_decl_express.js file

// const populations = [200, 1441, 30, 331]; - the population is called from the previous excercise at 4-arrays.js
const percentages2 = [];
for(let i = 0; i < populations.length; i++){
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
//this solution is definitely way better than the one at 4-arrays.js 😀