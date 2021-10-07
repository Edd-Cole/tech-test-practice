class Stack {
    //Constructor creates 3 properties related to "this" new object, and sets these properties below
    //maxSize if not given a value will default to a size of 10
    constructor(maxSize = 10) {
        this.storage = {};
        this.quantity = 0;
        this.maxSize = maxSize;
    }

    //Checks if stack is full, if not then it will process the saving of an item into storage and updates the quantity of stack
    push(item) {
        if (this.quantity === this.maxSize) return "Stack is full";
        this.quantity++;
        this.storage[this.quantity] = item;
    }

    //Checks if the stack is empty, if not returns the item in storage and updates the quantity of the stack
    pop() {
        if (this.quantity === 0) return undefined;
        let item = this.storage[this.quantity];
        delete this.storage[this.quantity];
        this.quantity--;
        return item;
    }

    //Returns a boolean on whether the number of items is equal to 0
    isEmpty() {
        return this.quantity === 0;
    }

    //Returns a boolean on whether the number of items is equal to the maxSize property
    isFull() {
        return this.quantity === this.maxSize;
    }

    //Resets the quantity to 0 and then sets the storage to and empty object
    clear() {
        this.quantity = 0;
        this.storage = {};
    }

    //Using the quantity property, we can use this to check the latest key value pair in the object
    peek() {
        return this.storage[this.quantity];
    }

    //If the stack is full, stop. Otherwise, loop through the remaining empty storage spaces and add in the desired item, then reset the quantity
    //to maxSize as it will be over because of the for loop
    autoFill(item) {
        if (this.quantity === this.maxSize) return "Stack is full";
        this.quantity++;
        for (this.quantity; this.quantity <= this.maxSize; this.quantity++) {
            this.storage[this.quantity] = item;
        }
        this.quantity = this.maxSize;
    }
}

module.exports = Stack;