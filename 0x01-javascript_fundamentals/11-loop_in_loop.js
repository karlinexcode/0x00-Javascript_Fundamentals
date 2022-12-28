//Assignment - Looping Backwards and Loops in Loops
//i-- is the same thing as i = i - 1

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];
//i here to find the location of each array that is inside (listOfNeighbours) for repitition
    for (let i = 0; i < listOfNeighbours.length; i++){
        //y here to find the location of each element of the arrays that is inside listOfNeighbours
        for (let y = 0; y < listOfNeighbours[i].length; y++)
//console.log listOfNeigbours at i as relative to the y position, once y iteration(loops) are completed then the loop continues to the next i array.
console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
}