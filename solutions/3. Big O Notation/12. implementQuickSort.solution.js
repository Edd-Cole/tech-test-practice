function implementQuickSort(nums) {
    //Find the midpoint depending on an odd or even length, create a newNums array and put the midpoint value inside it, and
    //create a counter so we can keep track of the midpoint in our new array
    const midpoint = nums.length % 2 === 0 ? nums.length / 2 : (nums.length - 1) / 2;
    const newNums = [nums[midpoint]];
    let shiftCounter = 0;

    //Loop through the LHS of the nums array, if the value is lower than the midpoint, add to the beginning of the new array and increment counter
    //Otherwise, just push to the end of the array
    for (let i = 0; i < midpoint; i++) {
        if (nums[i] > nums[midpoint]) {
            newNums.push(nums[i])
        } else {
            newNums.unshift(nums[i]);
            shiftCounter++;
        }
    }

    //Same as the above for loop, but this does the RHS of the nums array
    for (let i = midpoint + 1; i < nums.length; i++) {
        if (nums[i] > nums[midpoint]) {
            newNums.push(nums[i])
        } else {
            newNums.unshift(nums[i]);
            shiftCounter++;
        }
    }

    //If the nums array can be split into smaller arrays, split up the newNums array at the new location of the nums midpoint
    //by using slice, we can apply our quick sort method to the LHS and the RHS, recursively
    if (nums.length > 2) {
        return [...implementQuickSort(newNums.slice(0, shiftCounter)), ...implementQuickSort(newNums.slice(shiftCounter))]
    }

    //Lastly, return the value of the newNums array
    return newNums;
}

module.exports = implementQuickSort;