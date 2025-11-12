// // 3 “person” объектод getFullName функцыг нэм, энэ нь firstName болон lastName утгуудыг нийлүүлэн бүтэн нэрийг буцаах.
// const person = {
//   firstName: "Ross",
//   lastName: "Geller",
//   age: "30",
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.getFullName());

// // 4. “movie” нэртэй объект үүсгэж, түүнд title, director, year, genre зэрэг property нэм.

// const movie = {
//   title: "Gof Father",
//   director: "Frencis Ford Coppola",
//   year: "1972",
//   genre: "Criminal",
//   getKeysAndValues: function () {
//     return movie.title;
//   },
// };

// // console.log(getKeysAndValues(movie));
// console.log(Object.entries(movie));

// //  5. Nested objects with functions

// const info = {
//   student: {
//     name: "Chandler",
//     age: "30",
//     address: {
//       city: "NewYork",
//       street: "Bedford",
//       zipCode: "010000",
//     },
//     getFullAdress: function () {
//       return (
//         this.address.city +
//         " " +
//         this.address.street +
//         " " +
//         this.address.zipCode
//       );
//     },
//   },
// };
// // console.log(info)
// // console.log(Object.entries(info.student.address))
// console.log(info.student.getFullAdress());

// //  6. this ашиглан объектын функц үүсгэх

// const user = {
//   name: "BronzeAxe",
//   age: "48",
//   greet: function () {
//     console.log("Hi " + this.name);
//   },
//   updatename: function (newName) {
//     this.name = newName;
//   },
// };
// user.greet();

// user.updatename("Silver axe");

// console.log(user.name);

// // 7. Хоёр объект нэгтгэх

// const book1 = {
//   title: "Lord of The Rings",
//   author: "Jhon Talking",
//   year: "1954",
// };
// const book2 = {
//   author: "Jhon Talking",
//   description:
//     "Бөгжний эзэн нь хэлзүйч, Оксфордын Их Сургууийн багш Жон Толкины зохиосон зөгнөлт туульсын роман юм. Бөгжний эзэнг эхэндээ Толкины Хоббит хүүхдийн зохиолын үргэлжлэл болгон зохиож эхлэсэн ч сүүлдээ маш өргөн хүрээтэй бүтээл болжээ",
//   category: " High fantasy, Adventure ",
//   year: "1955",
// };

// function mergeBooks() {
//   return Object.assign(book1, book2);
// }
// console.log(mergeBooks(book1, book2));

// // 8 Object.freeze болон Object.seal ашиглах

// // “config” нэртэй объект үүсгэж, түүнд host, port, protocol
// // гэсэн property нэм.

// // Object.freeze ашиглан уг объектыг өөрчилж болохгүй
// // болгоод шинж чанаруудыг өөрчлөх оролдлого хийнэ.

// // Дараа нь Object.seal-тай ижил туршилт хийж ялгааг
// // тэмдэглэ.

// const config = {
//     host:" Pashamait ",
//     port: " Detka ",
//     protocol: " S0S ",
// }
// // Object.freeze(config)
// // delete config.port
// // config.port = "Broze Axe"

// Object.seal(config)
// delete config.port
// config.port = "Silver Axe",

// console.log(config)

// 10 Boss fight

let b = 0;
const onlineShops = {
  1: { name: "E-bay", score: 95 },
  2: { name: "Amazon", score: 87 },
  3: { name: "Pinduoduo", score: 78 },
  4: { name: "Temu", score: 83 },
  5: { name: "Taobao", score: 92 },
};
function calculateAverage(grade) {
  const grade1 = Object.values(grade);
  for (let i = 0; i < grade1.length; i++) {
    b += grade1[i].score;
  }
  return b / grade1.length;
};

function findAboveAverageStudents(grade) {
    const grade1 = Object.values(grade);
    for (let i = 0; i < grade1.length; i++) {
        console.log(grade1 >= calculateAverage);
        if ()
    }
}


// const findAboveAverageStudents = (grade) {
//     const average = calculateAverage(grade);
//     return(average);
//     console.log(findAboveAverageStudents(onlineShops))
// }

// const passedStudents = [];
// let b = 0;
// for (let b = 0; b < students.length; b++) {
//   console.log(students[b].score >= 65);
//   if (students[b].score >= 65) {
//     passedStudents.push(students[b].name);
//   }
// }
// console.log(passedStudents);





console.log(calculateAverage(onlineShops));
