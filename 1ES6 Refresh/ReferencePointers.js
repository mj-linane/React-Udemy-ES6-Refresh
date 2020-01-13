// // COPYING OBJECTS JUST REASSIGNS POINTERS TO OBJECT IN MEMORY
// const person = {
//   name: 'MJ',
// }

// const secondPerson = person;

// person.name = 'Elise';

// console.log(secondPerson)


// By using the SPREAD Operator, we can truly create a new object -- we copy the properties
const person = {
  name: 'MJ',
}

const secondPerson = person{
  ...person
};

person.name = 'Elise';

console.log(secondPerson)

// *** OBJECTS AND ARRAYS ARE REFERENCE TYPES -- 
// IF YOU ASSIGN THEM, YOU COPY THE POINTER NOT THE VALUES