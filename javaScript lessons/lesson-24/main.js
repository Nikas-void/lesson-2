// // ==========================
// // Exercise 1 — map
// // ==========================
// // Given the array of numbers, return a new array where each number is doubled.
// console.log("Dasgal ajil 1");
// const numbers1 = [2, 5, 8, 10];
// console.log(numbers1.map((numbers1) => numbers1 * 2));
// console.log("");
// // ==========================
// // Exercise 2 — filter
// // ==========================
// // From the array below, return only the even numbers.
// console.log("Dasgal ajil 2");
// const numbers2 = [3, 6, 9, 12, 15, 18, 2, 4];
// console.log(numbers2.filter((numbers2) => numbers2 % 2 == 0));
// console.log("");

// // ==========================
// // Exercise 3 — find
// // ==========================
// // Find the first object where age is greater than 25.
// console.log("Dasgal ajil 3");

// const people1 = [
//   { name: "Alice", age: 21 },
//   { name: "Bob", age: 26 },
//   { name: "Charlie", age: 29 },
//   { name: "Diana", age: 19 },
// ];
// console.log(people1.find((people) => people.age > 25));
// console.log("");
// // ==========================
// // Exercise 4 — some
// // ==========================
// // Check if there is at least one number greater than 100.
// console.log("Dasgal ajil 4");
// const numbers3 = [10, 20, 45, 80, 99];
// console.log(numbers3.some((numbers3) => numbers3 > 100));
// console.log("")
// // ==========================
// // Exercise 5 — includes
// // ==========================
// // Check if the word "banana" exists in the array.
// console.log("Dasgal ajil 5")
// const fruits = ["apple", "banana", "grape", "orange"];
// console.log(fruits.includes("banana"));
// console.log("")
// // ==========================
// // Exercise 6 — map + filter
// // ==========================
// // First, filter numbers greater than 10, then map to their squares.
// console.log("Dasgal ajil 6")
// const numbers4 = [3, 7, 12, 15, 20, 2];
// const numbers44 = numbers4.filter((numbers4)=>numbers4 > 10)
// console.log(numbers44.map((numbers44)=>numbers44 * numbers44))
// console.log("")

// // // ==========================
// // // Exercise 7 — find + includes
// // // ==========================
// // // Find the first student whose name includes the letter "a".
// console.log("Dasgal ajil 7")
// const students = ["John", "Mia", "Alex", "Eli", "Tom"];
// const students2 = students.find((students)=> students.includes("a") )
// console.log(students2)
// console.log("")

// // ==========================
// // Exercise 8 — filter + some
// // ==========================
// // From the array, return only users who have at least one skill equal to "Python".
// console.log("Dasgal ajil 8");
// const users = [
//   { name: "Anna", skills: ["HTML", "CSS", "JS"] },
//   { name: "Ben", skills: ["Python", "C++"] },
//   { name: "Cara", skills: ["Go", "Rust"] },
//   { name: "Dan", skills: ["Python", "JS"] },
// ];
// const users1 = users.filter((user) =>
//   user.skills.some((skill) => skill === "Python")
// );
// console.log(users1);
// console.log("");
// // ==========================
// // Exercise 9 — map + includes
// // console.log("Dasgal ajil 9")
// // ==========================
// // Create an array of booleans indicating whether each fruit name includes the letter "e".
// const fruits2 = ["apple", "pearl", "kiwi", "plum"];
// for (let i = 0; i < fruits2.length; i++) {
//   if (fruits2[i].includes("e")) {
//     console.log(fruits2[i]);
//   }
// }
// const fruits22 = fruits2.map((fruits) => fruits.includes("e"));
// const namesOrEmpty = fruits2.map((fruit) => (fruit.includes("e") ? fruit : ""));
// console.log(namesOrEmpty);
// console.log(fruits22);
// for (let k = 0; k < fruits2.length; k++) {
//   if (fruits22[k]) {console.log(fruits2[k])

//   }
// }

// Use map() to create a new array.
// If the fruit includes 'e', return the fruit name.
// Otherwise, return an empty string.
// const namesOrEmpty = fruits2.map((fruit) => {
//   if (fruit.includes("e")) {
//     return fruit;
//   } else {
//     return "";
//   }
// });

// console.log(namesOrEmpty);
// Output: [ 'apple', 'pearl', '', '' ]
// console.log("")

// // ==========================
// // Exercise 10 — filter + find
// // ==========================
// // Filter people who are older than 20, then find the first one whose name starts with "C".
// console.log("Dasgal ajil 10 ")
// const people2 = [
//   { name: "Alice", age: 18 },
//   { name: "Bob", age: 23 },
//   { name: "Charlie", age: 30 },
//   { name: "Clara", age: 25 },
// ];
// const people22 = people2.filter((people)=> people.age > 20)
// console.log(people22.find((person)=> person.name.includes("C") ))
// console.log("")
// ==========================
// Exercise 11 — nested map + some
// ==========================
// Check if any order contains at least one item with a price greater than 100.
const orders = [
  {
    id: 1,
    items: [
      { name: "Book", price: 20 },
      { name: "Pen", price: 5 },
    ],
  },
  {
    id: 2,
    items: [
      { name: "Laptop", price: 1200 },
      { name: "Mouse", price: 40 },
    ],
  },
  { id: 3, items: [{ name: "Chair", price: 80 }] },
];
console.log(orders.some((order) => order.items.some((item) => item.price > 100)));
// ==========================
// Exercise 12 — filter + map + includes (challenging)
// ==========================
// From the array, return names of users who have "admin" in their roles.
// const accounts = [
//   { name: "Eve", roles: ["user", "editor"] },
//   { name: "Mark", roles: ["admin", "moderator"] },
//   { name: "Sara", roles: ["guest"] },
//   { name: "Paul", roles: ["user", "admin"] },
// ];