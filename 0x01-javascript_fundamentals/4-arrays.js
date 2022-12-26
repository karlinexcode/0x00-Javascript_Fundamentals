//assignment - arrays
const populations = [200, 1441, 30, 331];
// check if the length of the array is 4 and log to the console
console.log((populations.length === 4) ? true : false)
// calculate percentages from the array 'populations' using the function of 'percentageOfWorld1' earlier created in '1-function_decl_express.js' then log to console
const percentages = [percentageOfWorld1(populations[0]),percentageOfWorld1(populations[1]),percentageOfWorld1(populations[2]),percentageOfWorld1(populations[3])];
console.log(percentages);