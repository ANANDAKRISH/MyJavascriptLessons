// Promise creation
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },0)
})

// Promise consumption
promiseOne.then(function(){
    console.log("Promise Consumed");
})

//2
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve()
//         console.log("Async task is complete");
//     },1000)
// }).then(function(){
//     console.log("Promise resolved");
// })

//3

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"anandu235",name:"AnandaKrishnan",age:23})
//     },1000)
// })

// promiseThree.then(function(userData){
//     console.log(userData);
// })

//4
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:"AnandaKrishnan",userid:"anandu235"})
//         }else{
//             reject("ERROR : Something Went Wrong")
//         }
//     },1000)
// })

// promiseFour.then((userdata) => {
//     return userdata.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error)
// }).finally(() => console.log("The promise is either resolved or rejected"))

// const promiseFive = new Promise((resolve,reject) => {
//     setTimeout(function(){
//         error= true
//         if(!error){
//             resolve({username:"anandu235" , name:"AnandaKrishnan" , location:"chennai"})
//         }else{
//             reject("Error:Something Went Wrong")
//         }
//     },1000)
// })

// async function ConsumepromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }
// ConsumepromiseFive()

// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log(error)
//     }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error)=>console.log(error))


