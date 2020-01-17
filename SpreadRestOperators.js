// Operator is simply ... depends on where we use it

// SPREAD -- split up array elements or object property

// REST -- USed to merge a list of function arguments into an array

// SPREAD OPERATOR
// With Arrays
const numbers = [1, 2, 3];

const newNums = [...numbers, 4];

console.log(newNums)

// With Objects
const person = {
  'name': 'MJ',

};

const newPerson = {
  ...person,
  'name2': 'Steve',
}

console.log(newPerson);

// REST OPERATOR -- less common, used with a function

const filter = (...args) => args.filter(el => el === 1);

console.log(filter(1, 2, 3));