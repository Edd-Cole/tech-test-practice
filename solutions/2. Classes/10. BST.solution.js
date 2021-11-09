class Node {
    // Constructor creates 3 values, using only 1 to initialise the current value, larger and smaller are null until a Node is inserted into them
    constructor(value) {
        this.value = value;
        this.larger = null;
        this.smaller = null;
    }

    // This is a getter function, very common in OOP languages, just return this
    getNode() {
        return this;
    }

    insertNode(value) {
        // Create a new node from the value
        const node = new Node(value);
        // Check if the value is bigger than the current value
        if (node.value > this.value) {
            // If so, check if the larger key has a node inside it, if not insert node here,
            if (this.larger === null) {
                this.larger = node;
            } else {
                //If not, then continue down the branch checking the next layer for a suitable spot
                this.larger.insertNode(value);
            }
            // If node is smaller, repeat the above process but with the smaller branch
        } else if (node.value < this.value) {
            if (this.smaller === null) {
                this.smaller = node;
            } else {
                this.smaller.insertNode(value);
            }
            // If value already exists in the tree, or value is not of a comparable type, throw an error
        } else {
            throw new Error("Unable to insert value");
        }
    }

    contains(value) {
        // If the value is here, return true
        if (this.value === value) {
            return true;
        } else if (this.larger !== null && value > this.value) {
            // If the value is larger, and there is a node to traverse, continue down looking for the value
            return this.larger.contains(value);
        } else if (this.smaller !== null && value < this.value) {
            // If the value is smaller, and there is a node to traverse, continue down looking for the value
            return this.smaller.contains(value);
        } else {
            // If we hit a null in the desired spot to search, return false, the value does not exist in our tree
            return false;
        }
    }

    locate(value) {
        // Define a path
        let path = "";
        // If value is here, return path
        if (this.value === value) {
            return path
        } else if (value > this.value && this.larger !== null) {
            // If value is greater, and we can traverse another node, add the branch we are traversing and then continue traversing
            path += "larger.";
            return path + this.larger.locate(value);
        } else if (value < this.value && this.smaller !== null) {
            // If value is smaller, and we can traverse another node, add the branch we are traversing and then continue traversing
            path += "smaller.";
            return path + this.smaller.locate(value);
        } else {
            // If value is not found, throw an error
            throw new Error("node does not exist")
        }
    }
}

class BST extends Node {
    // Create an object with the super constructor
    constructor(value) {
        super(value);
    }

    replace(node) {
        // If node is a Node object set all the values as needed
        if (node instanceof Node) {
            this.value = node.value;
            this.larger = node.larger;
            this.smaller = node.smaller;
        } else {
            // Otherwise, throw an error
            throw new Error("replace() only accepts arguments of type Node")
        }
    }

    locate(value) {
        // Nearly identical to the node, except we include a slice to remove the final . from the string
        let path = "";
        if (this.value === value) {
            return path
        } else if (value > this.value && this.larger !== null) {
            path += "larger.";
            return path + this.larger.locate(value).slice(0, -1);
        } else if (value < this.value && this.smaller !== null) {
            path += "smaller.";
            return path + this.smaller.locate(value).slice(0, -1);
        } else {
            throw new Error("node does not exist")
        }
    }
}


module.exports = { Node, BST };