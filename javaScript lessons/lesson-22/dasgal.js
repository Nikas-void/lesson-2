// ===================== 1. MAP — double all numbers =====================

/* TODO: use .map to create [2, 4, 6, 8] */
console.log("Exercises 1");

const nums1 = [1, 2, 3, 4];
console.log(nums1.map((num) => num * 2));

console.log("");

// ===================== 2. MAP — return only string lengths =====================
/* TODO: use .map to get [5, 2, 8] */
console.log("exercises 2");

const words1 = ["apple", "hi", "notebook"];
console.log(words1.map((words) => words.length * 1));

// console.log(words1.length.map((word) => word * 1));

console.log("");

// ===================== 3. FOR EACH — just log each item =====================
/* TODO: use .forEach to console.log each movie */
console.log("exercises 3");
const movies = ["Inception", "Avatar", "Dune"];
movies.forEach((a) => {
  console.log(a);
});

console.log("");

// ===================== 4. FILTER — keep only even numbers =====================
/* TODO: use .filter to get [8, 2, 4] */
console.log("exercises 4");
const nums2 = [3, 8, 11, 2, 9, 4];
const nums = nums2.filter((nums) => nums % 2 == 0);
console.log(nums);

console.log("");

// ===================== 5. FILTER — words longer than 4 letters =====================
/* TODO: use .filter to get ["giraffe", "planet"] */
console.log("exercises 5");
const words2 = ["cat", "giraffe", "sun", "planet"];
const word22 = words2.filter((words22) => words22.length > 4);
console.log(word22);

console.log("");

// console.log(words2.map((word)=>word.length * 1 > 4))

// ===================== 6. FIND — first number > 10 =====================
/* TODO: use .find to return 15 */
console.log("exercises 6");
const nums3 = [4, 9, 15, 8, 22];
const num33 = nums3.find((nums33) => nums33 > 10);
console.log(num33);

console.log("");

// ===================== 7. FIND — first string that includes "dog" =====================
/* TODO: use .find to return "hotdog" */
console.log("exercises 7");
const phrases = ["hotdog", "cat lover", "dog park", "bird"];
const phrases1 = phrases.find((phrases11) => phrases11.includes("dog"));
console.log(phrases1);

console.log("");

// ===================== 8. MAP + TEMPLATE — turn names into greetings =====================
/* TODO: use .map to output ["Hello Alice", "Hello Bob", ...] */
console.log("exercises 8");
const names = ["Alice", "Bob", "Charlie"];
names.forEach((a) => {
  console.log("Hello " + a);
});
console.log(names.map((name) => "Hello" + name));

console.log("");

// ===================== 9. FILTER + MAP — adults' names only =====================
console.log("exercises 9");
const people = [
  { name: "Mia", age: 17 },
  { name: "John", age: 21 },
  { name: "Sara", age: 25 },
];

const adults = people.filter((adults1) => adults1.age > 18);
const adultsNames = adults.map((adults2) => adults2.name);

console.log(adultsNames);

console.log("");

/* TODO:
   1) filter only people age 18+
   2) then .map to return just their names
*/

// ===================== 10. FOR EACH — total up numbers manually =====================
console.log("exercises 10");

/* TODO: use .forEach to sum into total, then console.log(total) */
const prices = [5, 10, 3];
let total = 0;
prices.forEach((sum) => (total = total + sum));
console.log(total);

console.log("");

// ===================== 11. MAP — add fullName property to users =====================
console.log("exercises 11");
const users1 = [
  { first: "John ", last: "Doe" },
  { first: "Jane ", last: "Smith" },
];

const fullName = users1.map((users1) => users1.first + users1.last);
console.log(fullName);

console.log("");

/* TODO: use map to return a new array where each object gains a fullName like "John Doe" */

// ===================== 12. FILTER — get products in stock & price > 20 =====================
console.log("exercises 12");
const products = [
  { name: "Keyboard", price: 30, inStock: true },
  { name: "Mouse", price: 15, inStock: true },
  { name: "Laptop", price: 900, inStock: false },
];

let pro = products.filter((product) => product.inStock == true);
let pro2 = pro.filter((product1) => product1.price > 20);
console.log(pro2);
console.log("");

/* TODO: use filter to return only products that are inStock and price > 20 */

// ===================== 13. FIND — get first student with grade A =====================
console.log("exercises 13");
const students = [
  { name: "Mia", grade: "B" },
  { name: "Leo", grade: "A" },
  { name: "Zoe", grade: "A" },
];
const found = students.find((element) => element.grade === "A");
console.log(found);
console.log("");
/* TODO: use find to get the first student with grade "A" */

// ===================== 14. FOREACH — log product names with index =====================
const productNames = ["Keyboard", "Mouse", "Laptop"];
productNames.forEach((sum, index) => console.log(index + 1 + "." + sum));
console.log("");
/* TODO: use forEach to console.log each item like: "1. Keyboard" */

// ===================== 15. MAP — apply 10% discount to product prices =====================
/* TODO: use map to return a new array with each price 10% lower */
const prices1 = [100, 50, 200];
console.log(prices1.map((sale) => (sale = sale - (sale / 100) * 10)));

 // ===================== 16. FILTER + MAP — active users' emails =====================
const users2 = [
  { name: "Anna", email: "anna@mail.com", active: true },
  { name: "Tom", email: "tom@mail.com", active: false },
  { name: "Sara", email: "sara@mail.com", active: true }
];
/* TODO: filter active users then map to return an array of only their email addresses */



// ===================== 71. FIND — first product over $500 =====================
const expensiveProducts = [
  { name: "Phone", price: 499 },
  { name: "Gaming PC", price: 1500 },
  { name: "Tablet", price: 299 }
];
/* TODO: use find to return the first product with price > 500 */



// ===================== 18. FOREACH — count total likes =====================
const posts = [
  { title: "Hello", likes: 10 },
  { title: "World", likes: 5 },
  { title: "JavaScript", likes: 20 }
];
let totalLikes = 0;
/* TODO: use forEach to add all likes into totalLikes */



// ===================== 19. MAP — convert temperatures from C to F =====================
const tempsC = [0, 20, 30];
/* TODO: return a new array where each number is converted to Fahrenheit (C * 9/5 + 32) */



// ===================== 20. FILTER — only usernames with length >= 5 =====================
const usernames = ["alex", "jonathan", "mia", "stephanie"];
/* TODO: filter to return only usernames with 5 or more characters */
