//Assignment - The while Loop
//
//percentageOfWorld1(population) - is called from the 2-function_decl_express.js file
// const populations = [200, 1441, 30, 331]; - the population is called from the previous excercise at 4-arrays.js
const percentages3 = [];
i = 0;
while(i < populations.length){
    percentages3.push(percentageOfWorld1(populations[i]));
    i++
}
console.log(percentages3);
// for this problem I prefer the for loop for this problem