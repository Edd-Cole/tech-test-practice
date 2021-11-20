const { Node, BST } = require("../functions/2. Classes/12. BST.js");

describe("Binary Search Tree", () => {
    describe("Node Class", () => {
        test("Node creates an object with a value, larger and smaller key-value pairs", () => {
            const node = new Node(10);
            expect(node).toEqual({
                value: 10,
                larger: null,
                smaller: null
            })
        })

        test("Node has a getNode() method that returns the current node", () => {
            const node = new Node(10);
            expect(node.getNode()).toEqual({
                value: 10,
                larger: null,
                smaller: null
            })
        })

        test("Node has an insertNode() method that will add a node into one of the free spaces", () => {
            const node = new Node(100);
            node.insertNode(150);
            node.insertNode(50);
            expect(node).toEqual({
                value: 100,
                larger: {
                    value: 150,
                    larger: null,
                    smaller: null
                },
                smaller: {
                    value: 50,
                    larger: null,
                    smaller: null
                }
            })
        })

        test("Node's insertNode() method throws an error if the value already exists in the tree, or is not of a comparable type", () => {
            const node = new Node(100);
            const e1 = new Node("hello");
            const e2 = new Node(100);
            expect(() => node.insertNode(e1)).toThrow("Unable to insert value");
            expect(() => node.insertNode(e2)).toThrow("Unable to insert value");
        })


        test("Node has a contains() method that searches the given nodes for the value, returns a boolean", () => {
            const node = new Node(1000);
            const values = [];
            for (let i = 0; i < 100; i++) {
                const value = Math.round(120 * Math.random() * (i + 1));
                if (!values.includes(value)) {
                    node.insertNode(value);
                }
                values.push(value);
            }
            node.insertNode(53.3);
            expect(node.contains(53.3)).toBe(true);
            expect(node.contains(100000)).toBe(false);
        })
    });

    describe("BST Class", () => {
        test("BST creates an object that starts a tree of nodes", () => {
            const bst = new BST(100);
            expect(bst instanceof Node).toBe(true);
            expect(bst).toEqual({
                value: 100,
                larger: null,
                smaller: null
            })
        })

        test("BST has an insertNode() method that adds a node into the tree", () => {
            const bst = new BST(100);
            bst.insertNode(50);
            expect(bst).toEqual({
                value: 100,
                larger: null,
                smaller: {
                    value: 50,
                    larger: null,
                    smaller: null
                }
            })
        })

        test("BST's insertNode() method continues down the path until it can add a node into the correct location", () => {
            const bst = new BST(100);
            bst.insertNode(90);
            bst.insertNode(80);
            bst.insertNode(110);
            bst.insertNode(105);
            bst.insertNode(95);
            expect(bst).toEqual({
                value: 100,
                larger: {
                    value: 110,
                    larger: null,
                    smaller: {
                        value: 105,
                        larger: null,
                        smaller: null
                    }
                },
                smaller: {
                    value: 90,
                    larger: {
                        value: 95,
                        larger: null,
                        smaller: null
                    },
                    smaller: {
                        value: 80,
                        larger: null,
                        smaller: null
                    }
                }
            })
        })

        test("BST has a contains() method that searches the tree for the desired value, returns a boolean", () => {
            const bst = new BST(1000);
            const values = [100000];
            for (let i = 0; i < 100; i++) {
                const value = Math.round(120 * Math.random() * (i + 1));
                if (!values.includes(value)) {
                    bst.insertNode(value)
                }
                values.push(value);
            }
            bst.insertNode(100000);
            expect(bst.contains(100000)).toBe(true);
            expect(bst.contains(1051)).toBe(false);
        })

        test("BST has a replace() method that changes the tree that the object contains", () => {
            const bst = new BST(100);
            const values = [];
            for (let i = 0; i < 100; i++) {
                const value = Math.round(7 * (Math.random() + 1) * (i + 1));
                if (!values.includes(value)) {
                    bst.insertNode(value)
                }
                values.push(value);
            }
            const node = new Node(20);
            node.insertNode(100);
            node.insertNode(15);
            bst.replace(node);
            expect(bst).toEqual({
                value: 20,
                larger: {
                    value: 100,
                    larger: null,
                    smaller: null
                },
                smaller: {
                    value: 15,
                    larger: null,
                    smaller: null
                }
            })
            expect(bst instanceof BST).toBe(true);
        })

        test("BST's replace() method only allows Node objects to replace any node in the tree", () => {
            const bst = new BST(10);
            bst.insertNode(100);
            bst.insertNode(50);
            expect(() => bst.replace(100)).toThrow("replace() only accepts arguments of type Node");
        })

        test("BST has a locate() method that returns the object path of the desired value", () => {
            const bst = new BST(100);
            bst.insertNode(25);
            bst.insertNode(50);
            bst.insertNode(110);
            bst.insertNode(170);
            bst.insertNode(150);
            bst.insertNode(99);
            bst.insertNode(37);
            bst.insertNode(12);
            bst.insertNode(105);
            bst.insertNode(38);
            bst.insertNode(101);
            bst.insertNode(33);
            bst.insertNode(144);
            bst.insertNode(96);
            expect(bst.locate(105)).toBe("larger.smaller");
            expect(bst.locate(38)).toBe("smaller.larger.smaller.larger");
            expect(bst.locate(144)).toBe("larger.larger.smaller.smaller");
            expect(bst.locate(101)).toBe("larger.smaller.smaller");
        })
    })
})