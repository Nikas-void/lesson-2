// 1

const car = {
  brand: "Lexus",
  model: "Es300",
  year: "2012",
};
console.log(Object.values(car));

// 2

const person = {
  firstName: "Ross",
  lastName: "Geller",
  age: "30",
  getFullName: 
};
person.position = "paleontologist";
person.city = "NewYork";
person.isMaried = false;
delete person.age;
console.log(person);

// 3

const names = {
  firstName: "Monica",
  lastName: "Geller",
};
console.log(Object.entries(names));

let firstName = "Monica";
let lastName = "Geller";

function getFullName(firstName, lastName) {
  return firstName + lastName;
}

console.log(getFullName(firstName, lastName));

console.log(getFullName("Odgerel", "Zolboo"));

console.log(getFullName("Bek", "Bek"));

console.log(getFullName("Bayar", "Gundee"));

// 4

const movie = {
  title: "Gof Father",
  director: "Frencis Ford Coppola",
  year: "1972",
  genre: "Criminal",
};

console.log(Object.entries(movie));

// 5

const info = {
  student: {
    name: "Chandler",
    age: "30",
    address: {
      city: "NewYork",
      street: "Bedford",
      zipCode: "010000",
    },
    getFullAdress : function(){}
  },
};
console.log(info)
console.log(Object.entries(info.student.address))