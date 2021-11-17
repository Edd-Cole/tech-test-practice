function updateInventory(arr1, arr2) {
    //Create an empty object and array, we'll house the items temporarily in the object and then return them in the array
    const inventory = {};
    const items = [];

    //Loop over both arrays, if the item exists in the object add the quantities together, otherwise add a new key value pair
    //with the name and quantity included in the object
    arr1.forEach(item => inventory[item[1]] ? inventory[item[1]] += item[0] : inventory[item[1]] = item[0]);
    arr2.forEach(item => inventory[item[1]] ? inventory[item[1]] += item[0] : inventory[item[1]] = item[0]);

    //Next loop through our object, create a new array for each one following the formate [quantity, item name] and push them
    //into our array we created above
    for (let item in inventory) {
        items.push([inventory[item], item])
    }

    //Lastly, we sort the array to get it in alphabetical order by name, use sort and compare the values of the names and
    //rearrange based on that
    items.sort(([a, b], [c, d]) => {
        if (b > d) return 1;
        if (b < d) return -1;
        return 0;
    });

    //Return new inventory
    return items;
}

module.exports = updateInventory;