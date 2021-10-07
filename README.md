# Tech Test Practice
---
## How to use:
Read the following 2 points first, and then you can read the tech test tasks a bit lower down!
### Setting it up:
First off, fork this repo into your own github, grab the link that is available from it and then run this in your terminal:
```http
git clone [URL_HERE]
```
After this you are going to need to install all the dependencies that are associated with this repo. Run this script:
```http
npm install
```
This should mean you're ready to go!
### Structure:
The repo is set up into 3 main directory structures within the root.
The first directory you should see is __tests__. This is where the tests live for the functions you will try to build. Each function has it's own testing file. When running your test, you can append the name of the file you want to test to make sure only that file is run. Use the following command to run your tests.
```http
npm test [ADD_FILE_NAME_HERE]
```
Next up are the functions, these will be where you can create the functions for the tests. This is where you will write your code. The functions are as bare as possible so you can build them up from scratch.

Lastly, are the solutions. These are my solutions, annotated, so you can understand my thought process for each tech test. Try to tackle the tech tests on your own and only review my answers after you have succeeded in passing the tests, or have attempted multiple times. Trying once for 5 minutes and then looking at the answers isn't going to help you.

---
## 1. Find the Symmetric Difference
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference">link</a>

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

### Task:
Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

## 2. Inventory Update
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update">link</a>
### Task:
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

## 3. Create a Stack Class
I'm sure you remember this one from fundamentals... but if you don't, here's your chance to get to recreate it all from scratch!
### Task:
Create a Stack class.

A stack is a way of storing data. It is only open at one end and can only have items added or removed, one at a time, from that end. Like stacking bowls on top of each other.

Oh, and no using pop or push because the tests are looking for an object! Have fun :)

## 4. Create some Shapes Classes
Even more classes, but probably not in the way we're used to. Here we're going to explore some super classes. This will help us get used to inheritance! I hope you enjoy this.
### Task:
Create a Shapes super class that will be the super class to a Cube and Sphere class.

N.B. When the word abstract is used below, all it means is that the function is defined but does not contain a body. It is completely empty. Here is a <a href="https://stackoverflow.com/questions/597769/how-do-i-create-an-abstract-base-class-in-javascript">Stack Overflow</a> page that will help you for this!

Our Shapes class is going to need the following:
- An abstract constructor that takes a single length/radius (m) and a mass (kg),
- An abstract Volume method (getVolume),
- An abstract Surface Area method (getSurfaceArea),
- A Density method,

Our Cube and Sphere classes are going to need to define these things further:
- A Constructor,
- A Volume method,
- A Surface Area method,
- A Density method
