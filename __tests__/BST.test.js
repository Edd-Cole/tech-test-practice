const { Node } = require("../functions/2. Classes/BST.js");

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
            const lNode = new Node(150);
            const sNode = new Node(50);
            node.insertNode(lNode);
            node.insertNode(sNode);
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

        test("Node's insertNode() method continues down the path until it can add a node into the correct location", () => {
            const node = new Node(100);
            const aN = new Node(90);
            const bN = new Node(80);
            const cN = new Node(110);
            const dN = new Node(105);
            const eN = new Node(95);
            node.insertNode(aN);
            node.insertNode(bN);
            node.insertNode(cN);
            node.insertNode(dN);
            node.insertNode(eN);
            expect(node).toEqual({
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
    })
})