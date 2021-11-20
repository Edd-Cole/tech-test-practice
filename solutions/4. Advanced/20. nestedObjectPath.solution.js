const nestedObjectPath = (object, field) => {
    //Declare string path to find desired field and the keys of each object at the top level
    let objString = "";
    const keys = Object.keys(object);
    //Check if the desired field exists at the top level, if it does return concat it to the objString and return it
    if (keys.includes(field) && typeof(object[field]) !== "object") {
        const index = keys.indexOf(field)
        objString += keys[index];
        return objString;
    } else {
        //If field is not in the top level, go to the next level of nested objects and search for the desired field one level deeper
        for (let key in object) {
            if (typeof(object[key]) === "object") {
                //Search the next level, and use recursion until we hit the end of all the objects
                let search = nestedObjectPath(object[key], field);
                //When we have found the field we are looking for, return the path that lead us to the field
                if (search.includes(field)) {
                    return objString += key + "." + search;
                }
            }
        }
    }
    //If key does not exist return an empty string
    return "";
}

module.exports = nestedObjectPath;