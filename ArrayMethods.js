const numbers = [1, 2, 3];

// USING MAP -- Built in array method -- takes a function as an input and then executed on each element in the array
const doubleNumbers = numbers.map((num) => {
  return num * 2;
});

// The new doubleNumbers is a NEW ARRAY
console.log(numbers);
console.log(doubleNumbers);