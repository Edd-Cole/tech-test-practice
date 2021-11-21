# <strong>Tech Test Practice</strong>
---
## Contents:
<ul>
<li><a href="#how">How to use</a></li>
<ul>
<li><a href="#setup">Setting it up</a></li>
<li><a href="#structure">Structure</a></li>
</ul>
<li><a href="#usingSols">Using Solutions</a></li>
<li><a href="#sec1">Section 1: Intermediate</a></li>
<ul>
<li><a href="#1">1. Which Doors are Open?</a></li>
<li><a href="#2">2. Are these Numbers Co-Prime?</a></li>
<li><a href="#3">3. Difference to Next Fibonacci Number</a></li>
<li><a href="#4">4. Inventory Update</a></li>
<li><a href="#5">5. Special Pythagorean Triplet</a></li>
<li><a href="#6">6. Convert to Roman Numerals</a></li>
<li><a href="#7">7. Implement Bubble Sort</a></li>
<li><a href="#8">8. How Many Passes of a Value do we make when Counting to a Number?</a></li>
</ul>
<li><a href="#sec2">Section 2. Classes</a></li>
<ul>
<li><a href="#9">9. Create a Stack Class</a></li>
<li><a href="#10">10. Create some Shapes Classes</a></li>
<li><a href="#11">11. Fix the Number Calculator Errors</a></li>
<li><a href="#12">12. Binary Search Tree</a></li>
</ul>
<li><a href="#sec3">Section 3. Big O Notation & Time Complexity</a></li>
<ul>
<li><a href="#13">13. Frog Jump</a></li>
<li><a href="#14">14. Add the Numbers</a></li>
<li><a href="#15">15. Passing Cars...</a></li>
<li><a href="#16">16. Implement Quick Sort</a></li>
</ul>
<li><a href="#sec4">Section 4. Advanced</a></li>
<ul>
<li><a href="#17">17. Find the Symmetric Difference</a></li>
<li><a href="#18">18. Recover the Secret String</a></li>
<li><a href="#19">19. Happy Prime Numbers</a></li>
<li><a href="#20">20. What is the Nested Object Pathway?</a></li>
</ul>
<li><a href="#sum">Summary</a></li>
</ul>

---
## <span id="how">How to use</span>:
Read the following 2 points first, and then you can read the tech test tasks a bit lower down!
### <span id="setup">Setting it up</span>:
First off, fork this repo into your own github, grab the link that is available from it and then run this in your terminal:
```http
git clone [URL_HERE]
```
After this you are going to need to install all the dependencies that are associated with this repo. Run this script:
```http
npm install
```
Lastly, make sure you update your test script with "jest" in the package.json.

This should mean you're ready to go!
### <span id="structure">Structure</span>:
The repo is set up into 3 main directory structures within the root and then this is divided into 4 main branches where you can practice Intermediate tech tests, Class based tech tests, <a href="https://en.wikipedia.org/wiki/Big_O_notation">Big O Notation</a> & <a href="https://codility.com/media/train/1-TimeComplexity.pdf">Time Complexity</a> tech tests, and Advanced tech tests.
The first directory you should see is __tests__. This is where the tests live for the functions you will try to build. Each function has it's own testing file. When running your test, you can append the name of the file you want to test to make sure only that file is run. Use the following command to run your tests.
```http
npm test [ADD_FILE_NAME_HERE]
```
Next up are the functions, this is where you will write your code. The functions are as bare as possible so you can build them up from scratch.

Lastly, are the solutions. These are my solutions, annotated, so you can understand my thought process for each tech test. Try to tackle the tech tests on your own and only review my answers after you have succeeded in passing the tests, or have attempted multiple times without success. Trying once for 5 minutes and then looking at the answers won't help you get the most out of these challenges.

---
## <span id="usingSols">Using Solutions</span>:
If you ever find yourself stuck, I have annotated solutions for you to look at.

If you want to test whether they really do work, you can change the requires statements on the relevant file to "../solutions/[FILE_NAME_HERE]". This will show you the tests working!

I hope having solutions and guiding you through them will help your understanding and how to tackle the problems.

Good luck and have fun!

---
## <span id="sec1">SECTION 1. INTERMEDIATE</span>:

These tech tests are to help you get used to tougher challenges that you may face in interviews.

If there is something you don't quite understand, I highly recommend you look it up. You would be expected to do so in <em>your</em> tech test!

---
## <span id="1">1. Which Doors are Open?</span>
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/100-doors">link</a>
In this challenge, we have some number, n, of doors that we will pass by, all of which are initially closed. We walk past each door and when we walk past them the first time we toggle all the doors. On our next iteration, we only toggle every 2nd door. On our next iteration, we toggle every 3rd door. Where each iteration we increase the value of the door we toggle. Until we toggle only the final door.

For the visually oriented. Assume this collection of 0's and 1's represent if a door is closed or open, respectively.

0 0 0 0 0 ...;

After our first loop we change all the doors states,

1 1 1 1 1 ...;

After our second loop, we change every second door's states,

1 0 1 0 1 ...;

After our third loop we change every 3rd door's states,

1 0 0 0 1 ...;

And so on...  

### Task:
We want to find out the index of the doors that are open after our final pass.
For example, given 5 doors, our function doorsOpened(5) should return an array of [1, 4] because 1 and 4 are the only opened doors.

---
## <span id="2">2. Are these Numbers Co-Prime?</span>
In maths, a prime number is a number that is only divisible by itself and 1 (e.g. 13 is only divisible by 13 and 1).

Co-Primes are 2 numbers such that their only common divisor is 1. For example, 9 and 20 are co-prime, no divisors (1, 2, 3, 4, 5, 9, 10 and 20) go perfectly into the other except 1.

Notice that neither 9 or 20 are prime themselves. This means that the numbers we choose don't have to be prime for them to be co-prime. But it does help if one number is prime.

100 and 756 on the other hand aren't co-prime because 2 divides both with no remainder (100/2 = 50, 756/2 = 378).

But, 100 and 111 are co-prime because 100 is divisible only by 1, 2, 4, 5, 10, 20, 25, 50 and 100 whereas 111 is only divisible by 1, 3, 37, and 111. Thus, the only 2 numbers in both lists that are a factor of both 100 and 111 is 1. Hence, 100 and 111 are co-prime.

### Task:
We want to find out if any 2 numbers are co-prime. Are 100,453 and 3,417 co-prime? What about these numbers: 81, 11,111,111? Are they co-prime?

Write a function that will return true if the numbers are co-prime and false if they aren't.

---
## <span id="3">3. Difference to Next Fibonacci Number</span>
I'm sure you've heard of the Fibonacci sequence. It's the set of numbers that you get when you add the two previous numbers in the sequence you get your next number. This sequence starts of with the numbers 0 & 1, giving us the following sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

This is the Fibonacci sequence that we all know and love.

### Task:
Our task is, given any number, find the difference between that number and the first Fibonacci number greater than our given number.

For example, given a number, 10, we want our function to return 3. This is because 13 is the first Fibonacci number that is greater than 10, thus 13 - 10 = 3.

If the given number is a Fibonacci number, return 0;

---
## <span id="4">4. Inventory Update</span>
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update">link</a>
### Task:
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

---
## <span id="5">5. Special Pythagorean Triplet</span>
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-9-special-pythagorean-triplet">link</a>
A Pythagorean triplet is a set of three natural numbers (0, 1, 2, 3, 4 , 5, ...), a < b < c, for which,
a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>.

For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.

When we sum a and b and c we derive a new number. Some of these numbers can only be made by one set of Pythagorean triplets.

For example, there exists exactly one Pythagorean triplet for which a + b + c = 1000.

### Task:
We want to find a special Pythagorean triplet which sums to some desired number, n. When we have a + b + c, we want to find the number that is the product of these three, a*b*c.

Write a function that will allow us to find out this product abc.

---
## <span id="6">6. Convert To Roman Numerals</span>
This is one that I used to hear about from candidates when I used to be a Tech Recruiter! I thought we should tackle this so we're better prepared for it if we ever face it in a real life tech test!

If you need a reminder the Roman Numerals we'll be using are as follows:

1: I,
5: V,
10: X,
50: L,
100: C,
500: D,
1,000: M

We won't be interested in any Roman Numeral over 4,999 as the rules change once we hit 5,000.

### Task:
Create a function that receives an integer between 1 and 4,999 which will then convert it into its Roman Numeral counterpart.

---
## <span id="7">7. Implement Bubble Sort</span>
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-bubble-sort">link</a>
Bubble sort is one of the original sorting algorithms.

The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted larger values towards the end of the array, continuing the process until the array is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

For example, let's say we have this array to start with:

[0, 2, 1, 4, 3]

After one loop it should look like this:

[0, 1, 2, 3, 4]

We get here by first comparing 0 with 2, is 0 greater than 2? No, so we do nothing and move on. Next, is 2 greater than 1? Yes, swap 2 and 1's positions in the array. Next, is 2 greater than 4 (remember we're on index 3 but still on number 2 because we swapped 2 and 1)? No, so keep them the same. Last in this loop, is 4 greater than 3? Yes, so swap.

As we have made changes, we would need to loop again to make sure that the array is sorted, or if changes still need to be made.

### Task:
Our goal here is to recreate the bubble sort method on an array of numbers. BUT, we do not want to mutate the original array or them to have the same memory reference!

---
## <span id="8">8. How Many Passes of a Value do we make when Counting to a Number?</span>
Have you come across this question?

For all the numbers between 0 - 100, how many 9's are there?

The right answer is... 20!

Why 20?

9, 19, 29, 39, 49, 59, 69, 79, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99

Don't forget 99 has 2 9's!

But what if we wanted to know how many 7's there are counting up to 7,513? Or, 24's there are counting up to 21,846?

### Task:
Create a function that accepts 2 numbers, 1 to count up to (e.g. 100) and the other to check against (e.g. 9), and return how many instances of that value occur when counting up to our first number. If our value occurs more than once in a number, count them a unique values!

#### Challenge!!!!
Can you make the function time and memory efficient??? Give this a shot if you have checked out Section 3 on Time Complexity!

---

## <span id="sec2">SECTION 2. CLASSES</span>:

This section is to give you a better understanding of OOP. You may not have dealt a lot with classes in the course so this is designed to help you improve your OOP skills. A lot of critical technologies use OOP principles including, C++, C# and Java.

Getting a bit familiar with it now will save you a lot of hassle if it ever comes up in a tech test.

---
## <span id="9">9. Create a Stack Class</span>
I'm sure you remember this one from fundamentals... but if you don't, here's your chance to get to recreate it all from scratch!
### Task:
Create a Stack class.

A stack is a way of storing data. It is only open at one end and can only have items added or removed, one at a time, from that end. Like stacking bowls on top of each other.

Your stack will need:
- A push() method,
- A pop() method,
- An isEmpty() method,
- An isFull() method,
- A peek() method,
- A clear() method,
- An autoFill() method

---
## <span id="10">10. Create some Shapes Classes</span>
Even more classes, but probably not in the way we're used to, yet. Here, we're going to explore some super classes. This will help us get used to inheritance and abstraction! I hope you enjoy this.

Inheritance is a way of "passing down" information from one class to another. All the information contained by the parent class can be accessed by the child class; the properties it uses and the methods that can be invoked.

However, we can also overwrite methods if we decide a general rule doesn't help a specific child class case. For example, if we have a Triangle super class that calculates the longest side of any triangle given 2 sides, it could be a complicated expression involving trigonometry. But, in the case of right angled triangles, we would want to invoke a simpler method using the Pythagorean Theorem; longestSide = Math.sqrt(a<sup>2</sup> + b<sup>2</sup>). Much nicer!

Abstraction is when we would overwrite the method each and every time for each sub class but, it would still make sense to have the method in the parent class. This is because it is still a method/behaviour of said class, so we don't complete the logic because it's too general to give any good information back.

For exampe, in this Shapes super class, it would make sense for it to have a getArea() method as every shape <strong>must</strong> have an area. But, how we calculate that area is going to be different for Triangles, Squares, Trapezoids, Pentagons, and any other regular/irregular shape. So, we say, "This shape class has an area, but there isn't enough information right now to use this method, but it makes sense for it to exist here". We can then overwrite this abstract method in any sub class.

An abstract class is any class that has at least 1 abstract method.
### Task:
Create a Shapes super class that will be the parent class to a Cube and Sphere class.

N.B. When the word abstract is used below, all it means is that the function is defined but does not contain a body. It is completely empty. Here is a <a href="https://stackoverflow.com/questions/597769/how-do-i-create-an-abstract-base-class-in-javascript">Stack Overflow</a> page that will help you for this!

Our Shapes class is going to need the following:
- An abstract Constructor that takes a single length/radius (m) and a mass (kg),
- An abstract Volume method (getVolume),
- An abstract Surface Area method (getSurfaceArea),
- An abstract Density method (getDensity),

Our Cube and Sphere classes are going to need to define these things further:
- A Constructor,
- A Volume method,
- A Surface Area method,
- A Density method

---

## <span id="11">11. Fix the Number Calculator Errors</span>
We had an idea where we would create a class that would help us calculate numbers for us. We would give it a group of numbers and then our calculator would apply its operations we want when we ask it to.

### Task:
These are the things we need you to help us fix.
- The constructor;
    this creates a new array from any collection of numbers entered into the constructor
- The generate() method;
    this adds a new number into the object's array by summing all the numbers together, dividing by the last number and then raising it to the nearest integer
- The getMidpoint() method;
    this returns the midpoint of the object's array
- The getUniqueFactors() method;
    this gives all the unique factors (factors that only appear once for all the numbers) in the object's array

---

## <span id="12">12. Binary Search Tree</span>
In Computer Science, a tree is a data structure wherein the data is organised down branches relative to it's "size" against a value. A Binary Tree is a tree that for each value in the tree, the tree offers 2 branches to follow depending on if the value we are comparing is greater or smaller than the value in the tree. Here's a diagram for reference...
<br /><br />
<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Yz2ZINJDIFiLFfGonPKMvQHaG8%26pid%3DApi&f=1" width="20%"/>
<br /><br />
Why would we want to use a tree? Surely, it would get too difficult too look at if we have millions of items.

But that's the advantage. As you learn in the next section, time efficiency of an algorithm is an important factor for large data sizes, and even though a tree will look terrible to look at, it's much more efficient for traversing than a standard array.

Let's say we have a tree as such:

                            100
                    50               150
                25      75      125       175

If we wanted to find the number 75, we would only need to go down 2 branches, the smaller one and then the larger one, comparing the number we want to find with the current value.

In a sorted array, it would be 3 steps from the start, and in an unsorted array it could take up to 7 steps.

A well ordered tree, offers a more efficient way to store values and to find them for large data sets.

For the mathsy people reading this. The longest it would take to traverse a well-ordered tree is log(n) where n is the number of nodes. And for an unordered array, the longest it would take is n, the number of values in the array.

For those that aren't so mathsy, if we moved at 1 value per second in both an unordered array and our well-ordered tree. If both our array and tree had 1024 values in them, it would take, maximally, 1024 seconds to completely search the array for our value. Our tree, on the other hand, would take 10 seconds, at most.

This is called the algorithms complexity, which is given in Big O notation, but that's for the next section.

Even if the value wasn't at the end of the array, searching the array will never be faster than searching the tree. It can only ever match the tree up to a certain point.

### Task:
We are going to build a binary search tree. Two classes have already been set up for you, BST and Node, your job is to give it the following functionality.

Node Class:
- Creates an object with a value, larger and smaller references,
- Has a getNode() method that returns the current node,
- Has an insertNode() method that will add a value into the Node,
- insertNode() can place a Node deep into the structure of the Node,
- Has a contains() method that searches the tree for the desired value

BST Class:
- Is a subclass of Node,
- insertNode() and contains() should still work for BST,
- Has a replace() method, replacing the current tree with a new tree,
- Has a locate() method that gives the path to the desired value in the tree

---
## <span id="sec3">SECTION 3: BIG O NOTATION & TIME COMPLEXITY</span>:

Creating efficient and scalable algorithms is a very important concept in Computer Science. Being able to solve a problem in a time-efficient manner can be the difference between processing the data in seconds or minutes or hours.

To learn more about Time Complexity and Big O notation, follow this <a href="https://app.codility.com/programmers/lessons/3-time_complexity/">link</a>. It will give you a brief introduction into this key concept.

---
## <span id="13">13. Frog Jump</span>
### Codility <a href="https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/">link</a>
A small frog wants to get to the other side of the road. The frog is currently located at position a, and wants to get to a position greater than or equal to b. The small frog always jumps a fixed distance, d.

### Task:
Create a function that counts the minimal number of jumps that the small frog must perform to reach its target. Your function must be efficient and complete its calculation in the specified time limit.

---

## <span id="14">14. Add the Numbers</span>
I'm sure you've come across this one before. And it's a great intro into Time Complexity along with Frog Jump.

### Task:
Add all the numbers from 0 to sum number n (n > 0)... But this time, you have to complete it in the time limit!

---
## <span id="15">15. Passing Cars...</span>
### Codility <a href="https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/">link</a>
Imagine, you're on a road travelling west to east, and you pass 5 cars. You know you have made 5 passings. But, what if you have a car in front of you? In total, there have been 10 passings. And a car behind you? There are now 15 passes. Quite simple.

But, what if one of those cars has just joined and you are the first one to pass it, then the score becomes 14 as the car infront of you hasn't passed it.

### Task:
Given an Array, A, where 0 determines a car is travelling East, and 1 means a car is travelling West, and A has up to 1,000,000 inputs. Write an algorithm that tells you how many passes between cars there are.

For example: A = [1,0,1,0,1] means there will be 4 passings in total, and A = [0,1,0,1,1] means there will be 5 passings in total.

If you get >= 2,000,000,000 passings, return -1.

This test is also timed, so make sure your algorithm is <a href="https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation">time efficient</a>.

As an aside, if your solution is not time efficient, you will be waiting for jest for a very long time! My computer runs the 1,000,000 sized array in about 3 minutes. The aim is to get this down to 5 seconds. The links will help!

---
## <span id="16">16. Implement Quick Sort</span>
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort">link</a>
Earlier, I asked you to sort an array of values using Bubble Sort.

Unfortunately, Bubble Sort is a little slow...

Consider the following array: [50, 49, 48, ..., 3, 2, 1], all the numbers counting down from 50 to 1 and our computer working at a rate of 1 loop per ms.

The array would need to be looped 50 * 50 = 2,500 times. That's 2.5 seconds to solve with Bubble Sort; an age in computing terms.

And what would happen if our array was 10,000,000 digits long, processing it at the same rate as above?

Worst case, it would take 100,000,000 seconds. Or, a little over 3 years to sort. Still, better than pushing a button for 3 years every 108 minutes.
<br /><br />
<img src="https://3.bp.blogspot.com/_r0n-VkU_yEI/TAGSYwk4WrI/AAAAAAAAFGI/AkY_9lWYHwI/s320/Desmond+Doesn't+Push+Button.jpg" />
<br />
<sub><a href="https://lostpedia.fandom.com/wiki/Desmond_Hume">Desmond Hume, Lost</a></sub>
<br /><br />
So, naturally, we want to try and shorten this time frame down a bit.

Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Bubble sort takes O(n<sup>2</sup>) time to compute, for those interested.

Our 50 number array just got sorted in half a second, max.

Our 10,000 number array just got sorted in, at most, 1 and a half days, assuming the same rate of computing.

### Task:
Let's build a Quick Sort algorithm! It is common to make the pivot of the Quick Sort the middle value.

---

## <span id="sec4">SECTION 4. ADVANCED</span>:

These are trickier challenges that I've come across whilst building this repo, and I think these will be a higher level than you should meet in any tech test you do straight out of the bootcamp.

But, if you're a level above, any tech test you do will demonstrate your skills and make you the top, if not, one of the top contenders for your desired role, in technical ability.

Give these a shot if you are aiming for BJSS, Infinity Works or any other Academy programme. This section will hold you in good stead.

---
## <span id="17">17. Find the Symmetric Difference</span>
### Free Code Camp <a href="https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference">link</a>

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

### Task:
Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

---
## <span id="18">18. Recover the Secret String</span>
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

---
## <span id="19">19. Happy Prime Numbers</span>
Do you watch Doctor Who? Did you watch the 2007 series with David Tennant and Freema Agyeman? And if so, did you watch the episode 42?

If you didn't don't worry, I'll explain this task here!

In the episode, the Doctor and Martha have to switch on the engines of a space ship because if they don't they'll crash into a sun.

However, there are numerous doors that have been locked and to open them they have to answer a round of multiple questions for each door.

One of the questions is, find the next number in the sequence: 313, 331, 367, ...

The answer is 379. Here's the <a href="https://www.youtube.com/watch?v=ee2If8jSxUo">clip</a> if you want to watch it. With a very quick explanation of a happy prime.

A happy number is a number that when you break it down into it's individual digits, square each one and then add them back together will give you a new number. You then repeat the same process with this new number. If you eventually hit 1 after repeating this process as many times as you need, you have a happy number!

For example: 68 --> 6<sup>2</sup> + 8<sup>2</sup> --> 36 + 64 --> 100 --> 1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> --> 1 + 0 + 0 --> 1; 68 is a happy number.

A happy prime is a prime number that will also hit one when you apply this "happy" process to it. Here's a <a href="https://en.wikipedia.org/wiki/Happy_number">link</a> for more info.

### Task:
Our task is to create a function that will determine whether a number is a happy prime number or not. The function should return true or false.

---
## <span id="20">20. What is the Nested Object Pathway?</span>
Consider this, you're working in MongoDB and want to sort your documents by any key. The problem though is that you have nested objects within nested objects. Now, you could hard code this, but... the conditional logic will get very big very quickly. So, instead you decide to build a function that will give you the object key path that you need. For example let's say you want to sort this array of "objects" by price:

const item = {
    name: "Ball",
    pricing: {
        price: 599,
        salePrice: 399,
        clearance: 299
    },
    weight: 500,
    dimensions: {
        height: 10,
        width: 10
    }
},

You would need the object path "pricing.price". But, if you want to sort by weight you would just need "weight". And as we want to sort by any value, we need to build a function that will give us this path.

### Task:
Build a nestedObjectPath that takes an object and a string that will return the pathway through the object that get's us to our desired key-value pair of a nested object (no arrays will be present). If there are duplicate key-value pairs, we want to find the first one that does not contain an object as the value.

---
## <span id="sum">Summary</span>:
I hope you've enjoyed these tech tests, some have been taken from (and credited) from the internet and others I have thought up. All the solutions given are ones I have created myself, and annotated by myself too.

If you have enjoyed them and found them useful, please leave a star on this GitHub repo at <a href="https://github.com/Edd-Cole/tech-test-practice">tech-test-practice</a>.

Any and all feedback is appreciated. If you have a tech test that you think will help others, send it to me and I can pop it in.

Best of luck securing your next role in tech!

<br /><br />
<sub>Written by <a href="www.github.com/Edd-Cole">Edd Cole</a></sub>