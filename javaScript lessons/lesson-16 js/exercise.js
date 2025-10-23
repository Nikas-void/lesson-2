// Хэрэглэгчээс тоо авна
// Хэрвээ тоо тэгш бол -> "Even"
// Хэрвээ сондгой бол -> "Odd" гэж хэвлэнэ

// let number = window.prompt("Write your numbers");

// if (number % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// if (number % 2 === 0) {
//     console.log("Even");
// } else if (number % 2!==0) {
//     console.log("Odd");
// }

// 2
// Нэг тоо өгөгдсөн байна
// Хэрвээ тоо > 0 бол -> "Positive"
// Хэрвээ тоо < 0 бол -> "Negative"
// Хэрвээ 0 бол -> "Zero" гэж хэвлэнэ

let snow = 0

if (snow > 0) {
    console.log("Positive");
} else if(snow < 0) {
    console.log("Negative");
} else if (snow === 0) {
    console.log("Zero")
}

//3
// Хэрэглэгчээс нас асууна
// Хэрвээ 13-аас доош -> "Child"
// 13–19 хооронд -> "Teenager"
// Үүнээс дээш -> "Adult" гэж хэвлэнэ

let numbers = window.prompt("Write your age");

if (numbers < 13) {
    console.log("Child");
} else if (numbers <= 19) {
    console.log("Teenager");
} else if (numbers >= 20) {
    console.log("Adult")
}

//4
// let password = "танынууцүг"
// Хэрвээ урт нь < 6 бол -> "Weak"
// 6–10 хооронд бол -> "Moderate"
// 10-аас урт бол -> "Strong"

let password = window.prompt("Your Password please");

if (password.length <= 6) {
    console.log("Weak");
} else if (password.length <= 10) {
    console.log("Moderate");
} else if (password.length > 10) {
    console.log("Strong")
}

//5
// Хэрэглэгчээс тоо авна
// Хэрвээ 3-д хуваагддаг бол -> "Fizz"
// Хэрвээ 5-д хуваагддаг бол -> "Buzz"
// Хэрвээ 3 болон 5-д хоёуланд нь хуваагддаг бол -> "FizzBuzz"
// Хэрвээ аль нь ч биш бол -> "3 эсвэл 5-д хуваагдахStrong

let number = window.prompt("Hello2 write you numbers");

if (number % 3 == 0 && number % 5 == 0) {
  console.log("FizzBuzz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else if (number % 3 == 0) {
  console.log("Fizz");
} else {
  console.log("strong");
}

// let player = window.prompt("Player1 choice");

// let computer = window.prompt("Player2 choice");

// console.log("Player1: " + player);
// console.log("Player2: " + computer);

// if (player === computer) {
//   console.log("TIE");
// } else if (player == "paper" && computer == "rock") {
//   console.log("Player 1 WON");
// } else if (player == "scissors" && computer == "scissors") {
//   console.log("Player 1 WON");
// } else if (player == "rock" && computer == "scissors") {
//   console.log("Player 1 WON");
// } else if (player == "scissors" && computer == "rock") {
//   console.log("Player 2 WON");
// } else if (player == "rock" && computer == "paper") {
//   console.log("Player 2 WON");
// }
