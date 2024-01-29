
function Person(name,age) {
    this.name = name;
    this.age = age;
    this.sayHello = () => {
      console.log(`Hello, ${this.name}!`);
    };
  }
  
  const person = new Person('John',30);
  console.log(person);
  person.sayHello();
  
  // when a function is called with with the new keyword , this refers to the newly created object.
  // the arrow function sayHello inherits the this value from the Person function, allowing it to access the name property of the Person instance.
  
