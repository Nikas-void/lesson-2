// 1

for (let i = 1; i <= 100; i = i + 2) {
  console.log(i);
}

// 2

let i = 0;
while (i < 100) {
  i++;
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 3

let sum = 0;
let i = 0;
while (i < 100) {
  i++;
  sum += i;
  if (sum > 100) {
    break;
  }
}
console.log(sum - i);

// 4

let i = 1;
while (i < 50) {
  if (i % 3 == 0) {
    console.log(i);
  }
  i++;
}

// 5

let numbers = [1, 3, 5, 7, 8, 9, 11];
let i = 0;
while (i <= numbers.length) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
    break;
  }
  i++;
}

// 1-50 hurtel toonii dundaj ol

let sum = 0;
let i = 0;
while (i < 50) {
  i++;
  sum += i;
}
console.log(sum / 50);

// Бод2: Array дахь хамгийн их утгыг олох
// Оролт: [4, 9, 2, 7, 5,100 ,32,24, 25, 13, 100, 54, 98, 88]

let number = [4, 9, 2, 7, 5, 32, 24, 25, 13, 100, 54, 98, 88];
number.sort(function (a, b) {
  return a - b;
});
console.log(number[number.length - 1]);
// console.log(Math.max(...number));

// let number = [4, 9, 2, 7, 5, 32, 24, 25, 13, 100, 54, 98, 88];
// let max = 0

// for (let i=0; i <number.length; i++) {
//     if(number[i] > max) {
//         max = number[i]
//     }
//     console.log(max, number[i])
// }
