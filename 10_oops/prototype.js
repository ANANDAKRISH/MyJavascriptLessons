// const myHeroes = ["anjaney","krishna","shiva","sreeram","kdlramma"]
// const myfunc = function(num){
//     console.log(num*2);
// }
// myfunc.power = 2
// console.log(myfunc.power);
// myHeroes.action = "pray"
// console.log(myHeroes.action);
// // console.log(myfunc.power);
// console.log(myHeroes.prototype);
// console.log(myfunc.prototype);

// function createUser(username,loginCount){
//     this.username = username
//     this.loginCount = loginCount
// }

// createUser.prototype.incrementLoginCount = function(){
//     this.loginCount++
//     console.log(this.loginCount);
// }

// createUser.prototype.printMe = function(){
//     console.log(`The current login count of ${this.username} is : ${this.loginCount}`);
// }

// createUser.prototype.isLoggedIn = true

// console.log(createUser.prototype);

// const user1 = new createUser("anand",8)
// const user2 = new createUser("hitesh",10)
// // user1.incrementLoginCount()
// // user1.printMe()
// user1.prototype.isLogged = true
// console.log(user1.prototype);
// console.log(user2.prototype);
// // console.log(createUser.prototype);

const UserNames = ["anand","hitesh","sai","krishna"]
const userDetails = {
    userName: "anand",
    loginCount: 8,
    isLoggedIn : true,
    getUserDetails: function(){
        console.log(`User ${this.userName} has logged in ${this.loginCount} times`);
    }
}

const userFunctions = function(user){
    console.log(`${user} is busy`);
}

Object.prototype.userCount = function(){
    console.log("userCOunt defines the total number of users logged in");
}

Array.prototype.userCountry = function(){
    console.log("All the users are indians");
}

// UserNames.userCount()
// userDetails.userCount()
// userFunctions.userCount()
// userDetails.getUserDetails.userCount()
// UserNames.userCountry()
userDetails.userCountry()