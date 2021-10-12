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
## Using Solutions:
If you ever find yourself stuck, I have annotated solutions for you to look at.

If you want to test whether they really do work, you can change the requires statements on the relevant to to "../solutions/[FILE_NAME_HERE]". This shall show you the tests working!

I hope having solutions and guiding you through them will help you understand my solution and how to tackle the problem.

Good luck and have fun!

---
## 1. Find the Symmetric Difference
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference">link</a>

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

### Task:
Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

---
## 2. Inventory Update
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update">link</a>
### Task:
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

---
## 3. Create a Stack Class
I'm sure you remember this one from fundamentals... but if you don't, here's your chance to get to recreate it all from scratch!
### Task:
Create a Stack class.

A stack is a way of storing data. It is only open at one end and can only have items added or removed, one at a time, from that end. Like stacking bowls on top of each other.

Oh, and no using pop or push because the tests are looking for an object! Have fun :)

---
## 4. Create some Shapes Classes
Even more classes, but probably not in the way we're used to. Here we're going to explore some super classes. This will help us get used to inheritance! I hope you enjoy this.
### Task:
Create a Shapes super class that will be the super class to a Cube and Sphere class.

N.B. When the word abstract is used below, all it means is that the function is defined but does not contain a body. It is completely empty. Here is a <a href="https://stackoverflow.com/questions/597769/how-do-i-create-an-abstract-base-class-in-javascript">Stack Overflow</a> page that will help you for this!

Our Shapes class is going to need the following:
- An abstract constructor that takes a single length/radius (m) and a mass (kg),
- An abstract Volume method (getVolume),
- An abstract Surface Area method (getSurfaceArea),
- An abstract Density method (getDensity),

Our Cube and Sphere classes are going to need to define these things further:
- A Constructor,
- A Volume method,
- A Surface Area method,
- A Density method

---
## 5. Happy Prime Numbers
Do you watch Doctor Who? Did you watch the 2007 series with David Tennant and Freema Agyeman? And if so, did you watch the episode 42?

If you didn't don't worry, I'll explain this task here!

In the episode, the Doctor and Martha have to switch on the engines of a space ship because if they don't they'll crash into a sun.

However, there are numerous doors that have been locked and to open them they have to answer a round of multiple questions for each door.

One of the questions is, find the next number in the sequence: 313, 331, 367, ...

The answer is 379. Here's the <a href="https://www.youtube.com/watch?v=ee2If8jSxUo">clip</a> if you want to watch it. With a very quick explanation of a happy prime.

A happy prime number is a number that when you break it down into it's individual digits, square each one and then add them back together will give you a new number. You then repeat the same process with this new number. If you eventually hit 1 after repeating this process as many times as you need, you have a happy number!

A happy prime is a prime number that also will hit one when you apply this "happy" process to it. Here's a <a href="https://en.wikipedia.org/wiki/Happy_number">link</a> for more info.

### Task:
Our task is to create a function that will determine whether a number is a happy prime number or not. The function should return true or false.

Be careful, if you don't hit 1 you might end up in an infinite loop!

Oh, and the last test might take a while, soo.. just let it sit for a minute!

---
## 6. Are these Numbers Co-Prime?
In Maths, (Yep, more maths!) a prime number is a number that is only divisible by itself and 1 (e.g. 13 is only divisible by 13 and 1).

Co-Primes are numbers that only common divisor is 1, this means that these numbers we choose don't have to be prime! For example, 13 and 17 are co-prime, neither divisor (1, 13 and 17) goes perfectly into the other except one.

100 and 756 on the other hand aren't co-prime because 2 divides both with no remainder (100/2 = 50, 756/2 = 378)

But, 100 and 111 are co-prime because 100 is divisible only by 1, 2, 4, 5, 25, and 100 whereas 111 is only divisible by 1, 3, 37, and 111. Thus, the only 2 numbers in both lists that are a factor of both 100 and 111 is 1. Hence, co-prime.

## Task:
We want to find out if any number of numbers are co-prime. Are 100453 and 3417 co-prime? What about these numbers: 79, 11111111? Are co-prime?

Our task is to write a function that will test for this and return true if the numbers are co-prime and false if they aren't.

---
## 7. Implement Bubble Sort
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort">link</a>
Bubble sort is one of the original sorting algorithms.

The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

## Task:
Our goal here is to re create the bubble sort method on an array of numbers. BUT, we do not want to mutate the original array or them to have the same memory reference!

---
## 8. Implement Quick Sort
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort">link</a>
Unfortunately, Bubble Sort is a little slow...

Consider the following array: [50, 49, 48, ..., 3, 2, 1]. Which is all the numbers counting down from 50 to 1.

This would take us 2.5 seconds to solve with Bubble Sort. That's an age in computing terms.

And what would happen if our array was 10,000,000 digits long and worked at a rate of 1 loop per ms? 

Worst case, it would take 100,000,000 seconds. Or, a little over 3 years to sort. Still, better than pushing a button for 3 years every 108 minutes.
<br /><br />
<img src="https://3.bp.blogspot.com/_r0n-VkU_yEI/TAGSYwk4WrI/AAAAAAAAFGI/AkY_9lWYHwI/s320/Desmond+Doesn't+Push+Button.jpg" />
<br />
<sub><a href="https://lostpedia.fandom.com/wiki/Desmond_Hume">Desmond Hume, Lost</a></sub>
<br /><br />
So, we're going to try and shorten this time frame down a bit.

Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Our 10,000 number array just got sorted in, at most, 1 and a half days.

### Task:
Let's build a Quick Sort algorithm! It is common to make the pivot of the Quick Sort the middle value.

And again, no sort() allowed!

## 9. Special Pythagorean Triplet
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-9-special-pythagorean-triplet">link</a>
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

Also, there exists exactly one Pythagorean triplet for which a + b + c = 1000.

### Task:
We want to find a special Pythagorean Triplet which sums to some desired number, n. When we have a + b + c, we want to find the number that is the product of these three, a*b*c.

Write a function that will allow us to find out this product abc.

---
## 10. Which Doors are Open?
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/100-doors">link</a>
In this challenge, we have some number of doors that we will pass by, all of which are initially closed. We walk past each door and when we walk past them the first time we toggle all the doors. On our next iteration, we only toggle every 2nd door. On our next iteration, we toggle every 3rd door. Where each iteration we increase the value of the door we toggle. Until we toggle only the final door.
### Task:
We want to find out the index of the doors that are open after our final pass.
For example, given 5 doors, our function doorsOpened(5) should return an array of [1, 4] because 1 and 4 are the only opened doors.

---
## 11. CHALLENGE: Recover the Secret String
### Code Wars <a href="https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript">link</a>
In this challenge, we are given an array of arrays. The sub-array are of length 3 and are triples of letters that, when all combined, can be used to discover a secret message.

For example, our array could look like:

[<br />
    ["h","l","p"],<br />
    ["h","e","l"],<br />
    ["e","l","p"]<br />
] 

which, our algorithm, should deduce as the string "help".

A note to add, that the secret message will only ever use each letter once, and the letters in the sub arrays will always be in the same order that they appear in the secret string.
### Task:
Our challenge is to write an algorithm that can reveal the secret string.