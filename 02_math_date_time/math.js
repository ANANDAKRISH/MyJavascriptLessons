const min = 10
const max = 20
// console.log(Math.floor(Math.random()*(max-min+1))+min);

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());

// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate1 = new Date("2023-01-14")
// console.log(myCreatedDate1.toLocaleString());
// let myCreatedDate2 = new Date("01-14-2023")
// console.log(myCreatedDate2.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let myCreatedDate = new Date()
// console.log(myCreatedDate.getMonth());
// console.log(myCreatedDate.getDay());
// console.log(myCreatedDate.getFullYear());
console.log(myCreatedDate.toTimeString('default',{
    weekday:"short",
    month:"long",
    year:"numeric",
    hour:"numeric"
}))

let new1 = new Date().getMonth()
let new2 = new Date().getFullYear()
let new3 = new Date().getDay()
console.log(`Today is ${new3} of ${new1} but the year is ${new2}`);
