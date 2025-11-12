console.log("Dasgal ajil 1");
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  greet() {
    console.log(`Hi, ${this.name}`);
  }
}
const person1 = new Person("Duman", 24, "male");
person1.greet();

class Student extends Person {
  constructor(name, age, gender, studentId) {
    super(name, age, gender);
    this.studentId = studentId;
  }
  yes() {
    console.log(this.name, "is", this.studentId);
  }
}

const student1 = new Student("Duman", 24, "male", "student");

student1.yes();

console.log("");
console.log("Dasgal ajil 2");

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getTotalPrice() {
    return this.price * this.quantity
  }
}
class Inventory extends Item {
    constructor(name, price, quantity,)

}
const items = new item ("BackBook", 1500, 3)
console.log(items)
