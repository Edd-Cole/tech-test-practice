const toggleDoors = (numDoors) => {
    //Create a new empty array
    const openDoors = [];
    //Iterate through the square numbers of i, such that i * i is never greater that numDoors
    for (let i = 1; i * i <= numDoors; i++) {
        //Add all the square numbers to openDoors, as  only square numbers have an odd number of factors, and an odd number of
        //factors is required to switch a door from "closed" to "open"
        openDoors.push(i * i);
    }
    //Return the array of square numbers;
    return openDoors
}

module.exports = toggleDoors;