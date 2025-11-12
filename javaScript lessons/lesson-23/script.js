//  Шинж чанар:

// width → өргөн

// height → өндөр

// Функц:

// area() → талбайг тооцно (width × height)

// perimeter() → периметрийг тооцно (2 × (width + height))

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }

//   perimeter() {
//     return 2 * (this.width + this.height);
//   }
// }

// const rect = new Rectangle(5, 3);

// console.log(rect.area());
// console.log(rect.perimeter());

// // Жишээ
// const rect = new Rectangle(5, 3);
// console.log(rect.area());      // 15
// console.log(rect.perimeter()); // 16

// :two:
// Student (Оюутан)

// Шинж чанар:

// name → нэр

// age → нас

// Функц:

// introduce() → “Hi, I'm NAME and I'm AGE years old.” гэж буцаана

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   void() {
//     return "im " + this.name + "and im " + this.age + "years old";
//   }
// }

// const student = new Student("Sara ", 24);

// console.log(student.void());
// // Жишээ
// const student = new Student("Sara", 20);
// console.log(student.introduce()); // "Hi, I'm Sara and I'm 20 years old."

// :three:
// BankAccount (Банкны данс)

// Шинж чанар:

// owner → эзэмшигчийн нэр

// balance → үлдэгдэл

// Функц:

// deposit(amount) → мөнгө нэмнэ

// withdraw(amount) → мөнгө хасна, хангалтгүй бол "Not enough balance!" гэж хэлнэ

// getBalance() → үлдэгдлийг буцаана

// // Жишээ
// class BankAccount {
//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance = balance;
//   }
// }
// const account = new BankAccount("Mumen Rider", 100);
// account.deposit(50);
// account.withdraw(30);
// const getBalance = allBalance(account.balance + account.deposit);
// console.log(account.getBalance);

// const account = new BankAccount("Enkhee", 100);
// account.deposit(50);  // 150
// account.withdraw(30); // 120
// console.log(account.getBalance()); // 120

// :four: TodoList (Даалгаврын жагсаалт)

// Шинж чанар:

// tasks → даалгаврын жагсаалт

// Функц:

// addTask(task) → шинэ даалгавар нэмнэ

// removeTask(task) → даалгаврыг устгана

// showTasks() → бүх даалгаврыг харуулна

// // Жишээ
// const todo = new TodoList();
// todo.addTask("Learn JavaScript");
// todo.addTask("Do homework");
// todo.removeTask("Do homework");
// console.log(todo.showTasks()); // ["Learn JavaScript"]

// :five: Calculator (Тооны машин)

// Функцүүд:

// add(a, b) → a + b

// subtract(a, b) → a - b

// multiply(a, b) → a × b

// divide(a, b) → a ÷ b, b = 0 бол "Cannot divide by zero!" гэж буцаана

// // Жишээ
// const calc = new Calculator();
// console.log(calc.add(5, 3));       // 8
// console.log(calc.subtract(10, 4)); // 6
// console.log(calc.multiply(2, 6));  // 12
// console.log(calc.divide(10, 2));   // 5
// console.log(calc.divide(10, 0));   // "Cannot divide by zero!"


class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const height = document.getElementById("height");
const width = document.getElementById("width");
const infoDiv = document.getElementById("hariu");
const Area = () => {
  const rect = new Rectangle(height.value, width.value);
  const area = document.createElement("div");
  area.innerHTML = "<p>" + "Area: " + rect.area() + "</p>";
  infoDiv.appendChild(area)
};
const perimeter = () => {
    const rect = new Rectangle(height,value, width,value);
    const perimeter = document.createElement("div")
}
 