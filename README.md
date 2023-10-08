

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 
The correct answer is B: ReferenceError: greetign is not defined. 

<i>There's a typographical error in the variable name. You declared the variable as greeting, but you assigned an empty object to a different variable called greetign. JavaScript is case-sensitive, so greeting and greetign are treated as two different variables.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:
The correct answer is D: `3`.

<i>the sum function takes two parameters a and b and returns their sum. When you call sum(1, "2"), JavaScript will attempt to perform type coercion and convert the string "2" to a number so that it can be added to `1`. The result is `3`, which is the sum of `1` and `2`.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 
The correct answer is A: ['🍕', '🍫', '🥑', '🍔'].

<i> create an array food containing emoji elements, and then you create an object info with a property favoriteFood set to the first element of the food array, which is "🍕".

Later in the code, you reassign the info.favoriteFood property to "🍝". However, this reassignment does not affect the original food array. Therefore, when you log food, it remains unchanged, and the output will be ['🍕', '🍫', '🥑', '🍔'].





</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:
The correct answer is B: Hi there, undefined.

<i>the sayHi function expects a name parameter, but when you call sayHi(), you do not pass any argument. In JavaScript, when a function parameter is not provided with a value, it defaults to undefined. Therefore, the function returns "Hi there, undefined" because the name parameter is undefined in this case.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 
The correct answer is C: 3.

<i>you have an array nums containing four elements: [0, 1, 2, 3]. You then use the forEach method to iterate over each element in the array and increment the count variable by 1 if the current element (num) is considered truthy.</i>

</p>
</details>