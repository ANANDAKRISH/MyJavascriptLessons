const tinderUser = {}
tinderUser.id = "abc@123"
tinderUser.name = "lokesh"
tinderUser.isLoggedIn = false
tinderUser.location = "kdlr"
tinderUser.pin = 680664

// console.log(tinderUser);

// const regularUser = {
//     email: "jojo@outlook.com",

//     fullName: {
//         userFullName: {
//             firstName: "jomon",
//             lastName: "menden"
//         }
//     },

//     id: "ok09i"
// }

// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName)
// console.log(regularUser.fullName.userFullName.firstName)

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// const obj3 = {5:"e",6:"f"}

// const obj4 = {...obj1,...obj2,...obj3}
// // const obj5 = Object.assign({},obj1,obj2,obj3)

// // console.log(obj4)
// // console.log(obj5)
// console.log(obj4)

// const users = [
//     {
//         name:"anand",
//         mail:"anandu235@gmail.com",
//         id:2128165,
//         place: "kodungallur"
//     },
//     {
//         name:"krishnan",
//         mail:"krish@234.com",
//         id:2128765,
//         place:"sringapuram"
//     },
//     {
//         name:"hero",
//         mail:"heroh@234.com",
//         id:2128700,
//         place:"kotapuram"
//     }
// ]

// console.log(users[2].place)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));