//1
// const person = {
//     name: "John",
//     greet() {
//       console.log("Hello, my name is " + this.name); // Normal function: this refers to person object
  
//       const arrowGreet = () => {
//         console.log("Hello, my name is " + this.name); // Arrow function: this ALSO refers to person object
//       };
  
//       arrowGreet(); // Output: Hello, my name is John (both functions have the same this)
//     }
//   };
  
//   person.greet();


//2
// function greet() {
//     console.log(`Hello, ${this.name}!`);
//   }
  
//   const name = 'John';
//   greet(); 
  
//3
// function greet() {
//     console.log(this);
//   }
  
//   greet(); 

//3
// function Person(name) {
//     this.name = name;
//     this.sayHello = () => {
//       console.log(`Hello, ${this.name}!`);
//     };
//   }
  
//   const person = new Person('John');
//   person.sayHello();
  
  // the arrow function sayHello inherits the this value from the Person function, allowing it to access the name property of the Person instance.
  
