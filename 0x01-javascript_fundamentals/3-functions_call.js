//assignment - Fuctions calling other Functions

function describePopulation(country, population){
    return console.log(`${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`)
    //this(above⬆️) will call 'percentageOfWorld1' function that was created in 1-function_decl_express.js which is supposed to return (population/7900) * 100, so then it will just substitute the 'population in the function called and then return the value.
}
describePopulation("Nigeria", 200);
describePopulation("China", 1441);
describePopulation("Ghana", 30);