// // 1 Sum Until Negative
// const numbers = [4, 7, 10, -3, 6, 9];
// let sum = 0;
// let i = 0;
// while (i < numbers.length) {
//   if (numbers[i] < 0) {
//     break;
//   } else {
//     sum = sum + numbers[i];
//   }
//   i++;
// }
// console.log(sum);

// let sum = 0;
// for (let x = 0; 0 < numbers.length; x++) {
//   if (numbers[x] < 0) {
//     break;
//   } else {
//     sum += numbers[x];
//   }
// }
// console.log(sum);

// 2 Count True Value Indexes
// const bools = [true, false, true, true, false, false, true];
// let i = 0;
// let sum = 0;
// while (i < bools.length) {
//   if (bools[i]) {
//     sum = sum + 1;
//   }
//   i++;
// }
// console.log(sum);

// 3 Reverse Array (Manually)
// const arr = [1, 2, 3, 4, 5];
// const arr2 =[]
// for (let b = 0; b < arr.length; b++) {
// console.log(arr.length -b -1);
// arr2.push(arr[arr.length -b -1]);
// }
// console.log(arr2)

// 4 Students Above Threshold (>= 65)

// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 58 },
//   { name: "Charlie", score: 90 },
// ];
// const passedStudents = [];
// let b = 0;
// for (let b = 0; b < students.length; b++) {
//   console.log(students[b].score >= 65);
//   if (students[b].score >= 65) {
//     passedStudents.push(students[b].name);
//   }
// }
// console.log(passedStudents);

// // 5 Total Price Calculator
// const cart = [
//   { name: "Apple", price: 2, quantity: 3 },
//   { name: "Banana", price: 1, quantity: 5 },
// ];

// let totalPrice = 0;
// let c = 0;
// for (let c = 0; c < cart.length; c++) {
//   console.log(cart[c].price * cart[c].quantity);
//   totalPrice = totalPrice + cart[c].price * cart[c].quantity;
// }
// console.log("Total Price: ", totalPrice)

// // 6 Average Age Calculator
// let b = 0;

// const people2 = [
//   { name: "Tom", age: 20 },
//   { name: "Jerry", age: 25 },
//   { name: "Spike", age: 30 },
// ];

// for (let i = 0; i < people2.length; i++) {
//   b += people2[i].age;
// }
// console.log(b / people2.length);

// // // 7 Remove Duplicates
// const numbers = [1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5];
// const arr = [];
// for (let x = 0; x < numbers.length; x ++) {
//   if (!arr.includes(numbers[x])) {
//     arr.push(numbers[x])
//   }
// }
// console.log(arr)

// 8 Longest Word
const sentence = "JavaScript is awesome and powerful ";
const splitSentence = sentence.split(" ");
let max = 0;
let index = 0;
for (let b = 0; b < splitSentence.length; b++) {
  if (max < splitSentence[b].length) {
    max = splitSentence[b].length;
    index = b;
  }
}
console.log("Max Character " + splitSentence[index]);
// // 9 Find Most Expensive Product
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Mouse", price: 25 },
//   { name: "Phone", price: 700 },
// ];
// // Your code here
