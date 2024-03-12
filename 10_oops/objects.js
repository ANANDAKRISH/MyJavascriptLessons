// const user = {
//     username: "anandu235",
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log(this);
//     }
// }

// console.log(user.getUserDetails());

function user(username,loginCount,signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}

const user1 = new user("anand",8,true)
const user2 = new user("anand",6,false)
console.log(user1.constructor);
console.log(user2.constructor);

