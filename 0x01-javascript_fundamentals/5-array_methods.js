// Assignment - Basic Array Operations(Methods)

/*
// adding element to the array
arrayName[.push]("newElement") -> adds a new element("newElement") to the END of the array(arrayName) -> also returns the new length of the array
arrayName[.unshift]("newElement") -> adds a new element("newElement") to the BEGINING of the array(arrayName) -> also returns the new length of the array

// removing element from the array
arrayName[.pop] = "newElement" -> removes the LAST element of the array(arrayName) -> also returns the element removed
arrayName[.shift] = "newElement" -> removes the element at the BEGINING of the array(arrayName) -> also returns the element removed

//.includes and .indexOf
are used to check if an element is in the array and what is the index of an element in an array, respectively.
*/

const neighbours = ["Chile", "Guinea", "Cameroun"];
//.push()
neighbours.push("Utopia");
//.pop()
neighbours.pop();
console.log(neighbours);
//.includes
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}
//.indexOf
neighbours[neighbours.indexOf('Guinea')] = 'Guinea Bissau';
console.log(neighbours);