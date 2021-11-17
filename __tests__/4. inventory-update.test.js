const updateInventory = require("../functions/1. Intermediate/5. inventory-update.js");

describe("Inventory Update", () => {
    test("When given 2 arrays with identical items, can add and return the item's quantities", () => {
        const items1 = [
            [20, "jeans"],
            [30, "mobile phones"],
            [10, "shoes"]
        ];
        const items2 = [
            [1, "jeans"],
            [12, "mobile phones"],
            [20, "shoes"]
        ];
        const answer = [
            [21, "jeans"],
            [42, "mobile phones"],
            [30, "shoes"]
        ];

        expect(updateInventory(items1, items2)).toEqual(answer);
    });

    test("When given 2 arrays with different items, can add and return the item's quantities", () => {
        const items1 = [
            [10, "apples"],
            [20, "bananas"],
            [15, "carrots"],
            [19, "dragonfruit"]
        ];
        const items2 = [
            [37, "carrots"],
            [41, "eggplant"],
            [109, "figs"],
            [2000000000, "kiwis"]
        ];
        const answer = [
            [10, "apples"],
            [20, "bananas"],
            [52, "carrots"],
            [19, "dragonfruit"],
            [41, "eggplant"],
            [109, "figs"],
            [2000000000, "kiwis"]
        ];
        expect(updateInventory(items1, items2)).toEqual(answer);
    });

    test("When given 2 arrays with different items and unsorted, will return an updated inventory of items which is sorted by the item name", () => {
        const items1 = [
            [14, "figs"],
            [27, "hammers"],
            [3, "deck chairs"],
            [12, "yachts"],
            [1, "airports"]
        ]
        const items2 = [
            [9, "hammers"],
            [56, "coffee grinders"],
            [2, "airports"],
            [15, "dust collections"],
            [9.5, "zippers"]
        ]
        const answers = [
            [3, "airports"],
            [56, "coffee grinders"],
            [3, "deck chairs"],
            [15, "dust collections"],
            [14, "figs"],
            [36, "hammers"],
            [12, "yachts"],
            [9.5, "zippers"]
        ];
        expect(updateInventory(items1, items2)).toEqual(answers);
    });
})