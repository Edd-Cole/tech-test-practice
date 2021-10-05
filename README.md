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
Next up are the functions, these will be where you can create the functions for the tests. YOU CAN CHANGE ANY PART OF THIS. You can even change the name or the parameters that go into the functions. Just make sure that if you do change the function name, you adjust the name else where in this repo.

Lastly, are the solutions. These are my solutions, annotated, so you can understand my thought process for each tech test. Try to tackle the tech tests on your own and only review my answers after you have succeeded in passing the tests, or have attempted multiple times. Trying once for 5 minutes and then looking at the answers isn't going to help you.

---
## 1. Find the Symmetric Difference
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference">link</a>


The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

<br />

### Task:
Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
