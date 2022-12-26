//assignment
//function declaration and expression - the difference between function declaration and function expression is that of hoisting, function declaration is hoisting while expression is not.
//
//function declaration
function percentageOfWorld1(population){
    return (population/7900) * 100;
}
const percentageChina = percentageOfWorld1(1441);
const percentageNigeria = percentageOfWorld1(200);
const percentageGhana = percentageOfWorld1(30);
console.log(percentageChina, percentageNigeria, percentageGhana);

//function expression
const percentageOfWorld2 = function (population){
    return (population/7900) * 100;
}
const percentageChina2 = percentageOfWorld2(1441);
const percentageNigeria2 = percentageOfWorld2(200);
const percentageGhana2 = percentageOfWorld2(30);
console.log(percentageChina2, percentageNigeria2, percentageGhana2);

