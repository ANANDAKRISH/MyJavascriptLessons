// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `kdh${this.password}oop09`
//     }

//     changeUsernameToCaps(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const user1 = new User("anand","anandu235@gmail.com","yhu675")
// console.log(user1.encryptPassword())
// console.log(user1.changeUsernameToCaps())
// console.log(user1.email)

// behind the scenes

// function User(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `kdh${this.password}oop09`
// }

// User.prototype.changeUsernameToCaps = function(){
//     return `${this.username.toUpperCase()}`
// }

// const user1 = new User("anand","anandu235@gmail.com","yhu675")
// console.log(user1.encryptPassword())
// console.log(user1.changeUsernameToCaps())
// console.log(user1.email)


class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`The username is ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by the user ${this.username}`);
    }
}

const user1 = new Teacher("anand","anandu235@gmail.com","lkduhd*0033","anandakrishnan")
// user1.addCourse()
// user1.logMe()
// console.log(user1.email);
// const user2 = new User("ahitesh")
// user2.logMe()
// user2.addCourse()

console.log(user1 === Teacher);
console.log(user1 instanceof Teacher);
console.log(user1 instanceof User);


