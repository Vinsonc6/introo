# 🖥️ Lesson: Loops, Arrays, and Arrow Functions in JavaScript

## 1. What is a Loop?

A **loop** is like a robot that repeats instructions.

* Instead of writing the same line of code 10 times, we can tell the robot:

> “Keep doing this until I say stop.”

---

## 2. For Loops

### Example: Print all students

```js
const students = ["Charlie", "Olivia", "Rodney", "Bill", "London"];

function printAll(list) {
  for (let i = 0; i < students.length; i++) {
    console.log(list[i]);
  }
}
printAll(students);
```

👉 What’s happening?

* `i = 0` → Start at the first student (index 0).
* `i < students.length` → Keep going as long as there are students left.
* `i++` → Move to the next student.

**Analogy:**
Imagine taking attendance in class. You start at the top of the list and go down one by one until you finish.

---

## 3. Array Methods

JavaScript gives us **shortcuts** for working with lists (arrays).

### `forEach` → Do something for every student

```js
students.forEach((student) => console.log(student));
```

👉 Prints each student’s name.
**Analogy:** It’s like handing out papers — you give one to *each student*.

---

### `find` → Look for one thing in the list

```js
const found = students.find((student) => student == "Olivia");
console.log(found);
```

👉 Finds `"Olivia"`.
**Analogy:** Searching the cafeteria for your friend.

---

### `filter` → Pick out certain items

```js
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbs.filter((el) => el % 2 == 0);
console.log(even);
```

👉 Gives `[2, 4, 6, 8, 10]`.
**Analogy:** Sifting through Legos to pull out only the red bricks.

---

## 4. Arrow Functions

Normal function:

```js
function add1(a, b) {
  return a + b;
}
console.log(add1(3, 4)); // 7
```

Arrow function (shorter way):

```js
const add2 = (a, b) => {
  return a + b;
};
console.log(add2(3, 4)); // 7
```

👉 Both do the same thing — arrow functions are just a shortcut.

**Analogy:** Writing “you” instead of “u” in a text message. Same meaning, just shorter.

---

## 5. While Loops

### Example 1: Countdown

```js
let number = 5;

while (number > 0) {
  console.log("Countdown: " + number);
  number--;
}
console.log("Blast off!");
```

👉 Runs while `number > 0`.
**Analogy:** Rocket countdown before launch 🚀.

---

### Example 2: Ask until the answer is “yes”

```js
let answer = "";
while (answer !== "yes") {
  answer = prompt("Do you want to play? (type yes to start)");
}
console.log("Game starting...");
```

👉 Keeps asking until the user types “yes.”
**Analogy:** Like when your teacher keeps asking “Are you ready?” until you finally say “Yes!”

---

## ✨ Key Takeaways

* **For loops** repeat a set number of times.
* **While loops** repeat until a condition is false.
* **Array methods** like `forEach`, `find`, `filter` are shortcuts for common tasks.
* **Arrow functions** are just a shorter way to write functions.

---

## 🎯 Practice Challenges

1. Use a **for loop** to print numbers from 1 to 10.
2. Use a **while loop** to count down from 20 to 1.
3. Use **filter** to find numbers greater than 50 in an array.
4. Write an **arrow function** that multiplies two numbers.
