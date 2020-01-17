// Easily exact array elements, or object properties and store them in variables
const numbers = [1, 2, 3];

// lets extact numbers 1 and 2
[num1, num2] = numbers;
// console.log(num1, num2)

// lets extract numbers from objects
// const myObj = {
//   person1: 'MJ',
//   person2: 'Elise',
// }


// const { a, b } = myObj;
// console.log(a);


const myObject = {
  a: "foo",
  b: false,
  c: 11
};

const { a, b, c } = myObject;
console.log(a); // "foo"
console.log(b); // false
console.log(c); // 11
