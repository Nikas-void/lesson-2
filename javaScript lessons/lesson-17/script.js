// // 1

// const fruits = ["apple", "orange", "banana", "mango", "grape"];

// console.log(fruits.slice(2, 3));

// // 2

// const animals = ["Lion", "Tiger", "Elephant", "Giraffe"];
// animals.splice(1, 1, "Panda");
// console.log(animals);

// // 3

// const books = ["1984", "Brae New World", "Fahrenheit451"];
// books.push("Harry Potter", "Lord of the Rings");
// console.log(books);

// // 4

// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers.indexOf(30));

// // 5

// const jims1 = ["apple", "orange", "banana"];
// const jims2 = ["grape", "mango", "lime"];
// const jims3 = ["lemon", "pineapple", "coconut"];

// const allFruits = jims1.concat(jims2, jims3);

// console.log(allFruits);

// // 6

// const colors = ["red", "green", "blue", "yellow", "purple"];
// console.log(colors.includes("black"));

// // 7

// const array1 = ["a", "b", "c"];
// const array2 = ["a", "b", "c"];

// if (array1.length === array2.length) {
//   console.log("True");
// } else if (array1.length != array2.length) {
//   console.log("False");
// }

// // 8

// const words = ["JavaScript", "is", "a", "versatile", "language"];
// const hh = words.join(" ");
// console.log(hh);

// // 9 Rock paper scissors

// let player = window.prompt("scissors, rock, paper");
// const computer = ["scissors", "rock","paper"]
// const randomComputer = computer[Math.floor(Math.random() * computer.length)];

// console.log("Player: " + player);
// console.log("Computer: " + randomComputer);

// if (player == randomComputer) {
//   console.log("TIE");
// } else if (player == "scissors" && randomComputer == "paper") {
//   console.log("Player  WON");
// } else if (player == "rock" && randomComputer == "scissors") {
//   console.log("Player  WON");
// } else if (player == "paper" && randomComputer == "rock") {
//   console.log("Player  WON");
// } else if (player == "paper" && randomComputer == "scissors") {
//   console.log("Computer  WON");
// } else if (player == "scissors" && randomComputer == "rock") {
//   console.log("Computer  WON");
// } else if (player == "rock" && randomComputer == "paper") {
//   console.log("Computer  WON");
// }

const people = [
  "Jhon",
  "Dima",
  "Lina",
  "Kunkka",
  "Void",
  "Luna",
  "Crystal",
  "Finger-Lady",
  "Tarnished",
  "Flamey",
];
const firstPeople = people[Math.floor(Math.random() * people.length)];
people.splice(people.indexOf(firstPeople), 1)
const secondPeople = people[Math.floor(Math.random() * people.length)];
console.log("2 people team:  " + firstPeople, secondPeople);
