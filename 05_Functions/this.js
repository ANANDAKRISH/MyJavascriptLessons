
const myObject = {
    fullname: 'John Doe',
    myArrowFunction: null,
  
    sayName: function () {
      this.myArrowFunction = () => {
        return `My name is ${this.fullname}`
      }
    }
  }
myObject.sayName()
console.log(myObject.myArrowFunction()) // this === myObject

// We need to call myObject.sayName() to initialize myObject.myArrowFunction and then you can call the myObject.myArrowFunction .