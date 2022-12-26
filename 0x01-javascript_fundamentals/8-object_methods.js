//Assignment - Object methods
//any function that is attached to an object is called a method
//when using the brackets[] method to call an object, the property should be defined as a string "" in the brackets
'use strict';
const myCountry2 = {
    country: "Nigeria",
    capital: "Abuja",
    language: "English",
    population: 200,
    neighbours: ["Chile", "Guinea Bissau", "Cameroun"],
    describe: function(){console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)},
    checkIsland: function(){this.isIsland = this.neighbours === 0 ? true : false;},
};

myCountry2.describe();
