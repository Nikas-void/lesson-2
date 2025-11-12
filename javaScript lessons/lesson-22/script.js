// const fruits = ["apple", "banana", "orage", "grape", "cherry", ]

// for (let i =0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }
// console.log("")
// fruits.forEach((a)=>{console.log(a)})

// 1. Захиалгад 100K₮-аас дээш бүтээгдэхүүн орсон хэрэглэгчийн нэрсийг гаргах
const users = [
  { id: 1, name: "Tsetsegee" },
  { id: 2, name: "Dulmaa" },
  { id: 3, name: "Bataa" },
];

const orders = [
  {
    userId: 1,
    items: [
      { name: "MacBook", price: 2500000 },
      { name: "Mouse", price: 40000 },
    ],
  },
  { userId: 2, items: [{ name: "Pen", price: 2000 }] },
  { userId: 3, items: [{ name: "Chair", price: 120000 }] },
];

const filteredOrders = orders.filter((order) =>
  order.items.some((item) => item.price >= 100000)
);
const userIds = filteredOrders.map((order) => order.userId);
const premiumUsers = users
  .filter((user) => userIds.includes(user.id))
  .map((premiumUser) => premiumUser.name);

console.log(premiumUsers);

// 2. "Math" хичээл сонгосон оюутнуудын нэрсийг гаргах

const students = [
  { id: 1, name: "William", selectedSubjects: ["Math", "Physics"] },

  { id: 2, name: "Drake", selectedSubjects: ["Biology", "Chemistry"] },

  { id: 3, name: "Weekend", selectedSubjects: ["Math", "History"] },
];

const subjects = [
  { name: "Math" },

  { name: "Physics" },

  { name: "Chemistry" },

  { name: "Biology" },

  { name: "History" },
];

const filteredStudents