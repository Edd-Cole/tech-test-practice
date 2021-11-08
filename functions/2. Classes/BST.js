class Node {
    constructor(value) {
        this.value = value;
        this.larger = null;
        this.smaller = null;
    }

    getNode() {
        return this;
    }

    insertNode(node) {
        if (node.value > this.value) {
            if (this.larger === null) {
                this.larger = node;
            } else {
                this.larger.insertNode(node);
            }
        } else if (node.value < this.value) {
            if (this.smaller === null) {
                this.smaller = node;
            } else {
                this.smaller.insertNode(node);
            }
        } else {
            throw new Error("Unable to insert value");
        }
    }

}


module.exports = { Node };