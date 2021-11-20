const Stack = require("../functions/2. Classes/9. stack.js");

describe("Stack", () => {
    test("Stack has a storage property that is an object itself", () => {
        const stack = new Stack();
        expect(stack.hasOwnProperty("storage")).toBe(true);
        expect(typeof(stack.storage)).toBe("object");
    });

    test("Stack has a quantity property", () => {
        const stack = new Stack();
        expect(stack.hasOwnProperty("quantity")).toBe(true);
    });

    test("Stack has a maxSize property that can be set as an argument or take a default value, default is 10", () => {
        const stack = new Stack();
        expect(stack.hasOwnProperty("maxSize")).toBe(true);
        expect(stack.maxSize).toBe(10);

        const stack2 = new Stack(20);
        expect(stack2.maxSize).toBe(20);
    });

    test("Stack has a push method that adds data into storage when stack is not full", () => {
        const stack = new Stack(3);
        expect(typeof(stack.push)).toBe("function");
        stack.push(1);
        expect(stack.storage[1]).toBe(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.storage).toEqual({ 1: 1, 2: 2, 3: 3 });
    });

    test("Stack has a pop method that removes the most recently added piece of data, provided stack is not empty", () => {
        const stack = new Stack(3);
        expect(typeof(stack.pop)).toBe("function");
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBe(undefined);
    });

    test("Stack has an isEmpty method that tests whether the storage property is empty or not, returns boolean", () => {
        const stack = new Stack();
        expect(typeof(stack.isEmpty)).toBe("function");
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });

    test("Stack has an isFull method that tests whether the storage property is full or not, returns boolean", () => {
        const stack = new Stack(1);
        expect(typeof(stack.isFull)).toBe("function");
        expect(stack.isFull()).toBe(false);
        stack.push(1);
        expect(stack.isFull()).toBe(true);
    });

    test("Stack has a peek method that returns the top value of the stack without popping it from the stack", () => {
        const stack = new Stack(5);
        expect(typeof(stack.peek)).toBe("function");
        stack.push(1);
        stack.push("dog");
        expect(stack.peek()).toBe("dog");
        expect(stack.storage[2]).toBe("dog");
    })

    test("Stack has a clear method that returns an empty storage, with all data removed", () => {
        const stack = new Stack();
        expect(typeof(stack.clear)).toBe("function");
        stack.push(1)
        stack.push(2);
        stack.push(3);
        stack.push(4);
        expect(stack.quantity).toBe(4);
        stack.clear();
        expect(stack.storage).toEqual({});
        expect(stack.quantity).toBe(0);
    })

    test("Stack has an autoFill method that returns a filled up storage object with the single item it was passed in but does not wipe any of the original inputs that still exist within the storage", () => {
        const stack = new Stack();
        expect(typeof(stack.autoFill)).toBe("function");
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.autoFill("fillME!");
        expect(stack.quantity).toBe(10);
        expect(stack.storage).toEqual({
            1: 1,
            2: 2,
            3: 3,
            4: "fillME!",
            5: "fillME!",
            6: "fillME!",
            7: "fillME!",
            8: "fillME!",
            9: "fillME!",
            10: "fillME!",
        })

        const stack2 = new Stack(5);
        stack2.autoFill(1)
        expect(stack2.storage).toEqual({
            1: 1,
            2: 1,
            3: 1,
            4: 1,
            5: 1
        })
        expect(stack2.autoFill(2)).toBe("Stack is full");
        expect(stack2.storage).toEqual({
            1: 1,
            2: 1,
            3: 1,
            4: 1,
            5: 1
        })
    })
});