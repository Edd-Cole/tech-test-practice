class Stack {
    constructor(maxSize = 10) {
        this.storage = {};
        this.quantity = 0;
        this.maxSize = maxSize;
    }

    push(item) {
        if (this.quantity === this.maxSize) return "Stack is full";
        this.quantity++;
        this.storage[this.quantity] = item;
    }

    pop() {
        if (this.quantity === 0) return undefined;
        let item = this.storage[this.quantity];
        delete this.storage[this.quantity];
        this.quantity--;
        return item;
    }

    isEmpty() {
        return this.quantity === 0;
    }

    isFull() {
        return this.quantity === this.maxSize;
    }

    clear() {
        this.quantity = 0;
        this.storage = {};
    }

    peek() {
        return this.storage[this.quantity];
    }

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