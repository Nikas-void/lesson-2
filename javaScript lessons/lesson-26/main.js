// Dasgal ajil 1
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
const areaInfo = document.getElementById("areaInfo");
const periInfo = document.getElementById("periInfo");

const Area = () => {
  const rect = new Rectangle(height.value, width.value);

  areaInfo.innerText = `Area: ${rect.area()}`;
};

const Perimeter = () => {
  const h = parseInt(height.value);
  const w = parseInt(width.value);
  const rect = new Rectangle(h, w);
  periInfo.innerText = `Perimeter: ${rect.perimeter()}`;
};

// Dasgal ajil 2
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hi, i'm ${this.name} and i'm ${this.age} years old `;
  }
}
const studentName = document.getElementById("studentName");
const studentAge = document.getElementById("studentAge");
const studentInfo = document.getElementById("studentInfo");

const introduce = () => {
  const student1 = new Student(studentName.value, studentAge.value);
  studentInfo.innerText = student1.greet();
};
document.getElementById("studentBtn").addEventListener("click", introduce);
studentAge.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    introduce();
  }
});

// Dasgal ajil 3
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(value) {
    this.balance = this.balance + value;
    return this.balance + value;
  }
  withdraw(value) {
    if (this.balance < value) {
      return "NOT ENOUGH BALANCE";
    } else {
      return this.balance - value;
    }
  }
  getBalance() {
    return this.balance;
  }
  getAccountInfo() {
    return `Owner: ${this.owner} 
    Balance: ${this.balance}`;
  }
}

const owner = document.getElementById("ownerName");
const amount = document.getElementById("userValue");
const answer = document.getElementById("answer");
const createBtn = document.getElementById("createBtn");
const accountElement = document.getElementById("account");
const actionInput = document.getElementById("actionInput");

let account = null;

const checkAccount = () => {
  if (account === null) {
    accountElement.innerHTML = "Create an account First Please";
  }
};
const displayBalance = () => {
  accountElement.innerHTML = account.getAccountInfo();
};

const createAccount = () => {
  if (owner.value === "") return;
  if (amount.value === "") return;
  account = new BankAccount(owner.value, parseInt(amount.value));
  displayBalance();
};
createBtn.addEventListener("click", createAccount);

const deposit = () => {
  checkAccount();
  if (actionInput.value === "") return;
  account.deposit(parseInt(actionInput.value, 10));
  displayBalance();
  actionInput.value = "";
};
