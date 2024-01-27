//-2
// const cameras = {
//     price:200,
//     weight:200,
//     mydes: function(){
//         return `this canon camera is of ${price}`
//     }
//   }

// //   console.log(mydes);
// console.log(cameras.mydes());

//-1
// const cameras = {
//     price:200,
//     weight:200,
//     mydes: function(){
//         return `this canon camera is of ${this.price}`
//     }
//   }

// //   console.log(mydes);
// console.log(cameras.mydes());

//0
// const cameras = {
//     price:200,
//     weight:200,
//     mydes: () => {
//         return `this canon camera is of ${this.price}`
//     }
//   }

// //   console.log(mydes);
// console.log(cameras.mydes());


//1
// const myFunc = () => {
//     console.log(this)
//   }
  
// myFunc()

//2
// const newFunction = function(){
//     console.log(this)
// }

// newFunction()

//3
// const myObj = {
//     myMethod: () => {
//       console.log(this)
//     },
//   }
// myMethod()
// myObj.myMethod()

//4
// const myObj = {
//     myMethod: function() {
//       console.log(this)
//     },
//     name:"anand"
//   }

// myObj.myMethod()

//5
// const myObject = {
//     fullname: 'John Doe',
//     sayName: () => {
//       return `My name is ${this.fullname}`
//     },
//   }
// //   sayName()
// console.log(myObject.sayName())

//6
// const myObject = {
//     fullname: 'John Doe',
//     sayName: () => {
//       console.log(this);
//       return `My name is ${this}`
//     },
//   }
// console.log(myObject.sayName())

//7
// const myObject = {
//     fullname: 'John Doe',
//     sayName: function() {
//       console.log(this);
//       return `My name is ${this.fullname}`
//     },
//   }
// console.log(myObject.sayName())


//8
// const myObject = {
//     fullname: 'John Doe',
//     myArrowFunction: null,
  
//     sayName: function () {
//       this.myArrowFunction = () => {
//         return `My name is ${this.fullname}`
//       }
//     },
//   }
//   console.log(myObject.sayName())
// myObject.sayName()
// console.log(myObject.myArrowFunction()) // this === myObject

// We need to call myObject.sayName() to initialize myObject.myArrowFunction and then you can call the myObject.myArrowFunction .

//9
// const myObject = {
//     fullname: 'John Doe',
//     myArrowFunction: null,
  
//     sayName: function () {
//       this.myArrowFunction = () => {
//         return `My name is ${this.fullname}`
//       }
//     },
//   }

//    myObject.myArrowFunction()
//  console.log(myObject.sayName())
// myObject.sayName()
// console.log(myObject.myArrowFunction()) // this === myObject

  