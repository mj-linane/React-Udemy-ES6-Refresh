// Basic Class
// class Person {
//   constructor() {
//     this.name = 'MJ'

//     function printMyName() {
//       console.log(this.name);
//     }
//   }
// }


// Extends Example 
class Human {
  constructor() {
    this.gender = 'Male';

    this.printMyGender = function () {
      console.log(this.gender);
    }
  }
}


class Person extends Human {
  constructor() {
    super();
    this.name = 'MJ';
    this.gender = 'Female';

    this.printMyName = function () {
      console.log(this.name);
    }
  }
}
const person = new Person();

person.printMyGender();