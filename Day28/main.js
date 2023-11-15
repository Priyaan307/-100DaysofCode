// Question 1. (7 mins)
// Take an array as input and double all its elements
// let Array2=[];
// function doubleTheValueOfArray(Array1) {
//     for(i=0;i<Array1.length;i++){
//         Array2[i]=Array1[i]*2;
//     }
//     return Array2;
// };
// doubleTheValueOfArray([1,2,3]);
// console.log(Array2);

// #### function() constructor:

// var student1 = {
//     firstName: "Priya",
//     lastName: "darshani",
//     fullName: "Priyadarshani",
//     age: 21
// }

// function Student(first, last, full, age) {
// this.firstName = first;
// this.lastName = last;
// this.fullName = full;
// this.age = age;
// }
// var student2 = new Student("Riya", "Kumari", "Riya Kumari", 22);
// console.log(student2);
// student2.name = function (){
// return this.firstName + '' + this.lastName;
// }
// console.log(student2.name);

// // Question 2.(15 mins)

/*
Create a function constructor to represent students in a class 
Student 
Attributes- firstname, lastname, present {true/false(default)}, location: {home(default)/school}
Behavior 
goHome - changes location to home
goSchool - changes location to school and present to true
Prototype method - fullname = firstname + lastname
*/

// Student constructor function
function Student(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.present = false; // default value is false
    this.location = 'home'; // default value is 'home'
  }
  
  // Prototype method for calculating full name
  Student.prototype.fullname = function() {
    return this.firstname + ' ' + this.lastname;
  };
  
  // Prototype method for going home
  Student.prototype.goHome = function() {
    this.location = 'home';
  };
  
  // Prototype method for going to school
  Student.prototype.goSchool = function() {
    this.location = 'school';
    this.present = true;
  };
  
  // Example usage
  const student1 = new Student('John', 'Doe');
  console.log(student1.fullname()); // Output: John Doe
  console.log(student1.location);    // Output: home
  
  student1.goSchool();
  console.log(student1.location);    // Output: school
  console.log(student1.present);     // Output: true
  
  student1.goHome();
  console.log(student1.location);    // Output: home
  console.log(student1.present);     // Output: false
  