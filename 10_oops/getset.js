// class User{
//     constructor(email,password){
//         this.email = email
//         this._password = password
//     }

//     get password(){
//         return this._password.toUpperCase()
//     }

//     set password(value){
//         this._password = value
//     }
        
// }

// const user = new User('anand',"abc")
// console.log(user.password);
// console.log(user._password);



// function User(email,password){
//     this._email = email
//     this._password = password

//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.toUpperCase()
//         } ,

//         set: function(value){
//             this._email = value
//         }
//     })

//     Object.defineProperty(this,'password',{
//         get: function(){
//             return this._password.toUpperCase()
//         } ,

//         set: function(value){
//             this._password = value
//         }
//     })

// }
// const user1 = new User("anand235","abc")
// console.log(user1.email);
// console.log(user1._email);
// console.log(user1.password);
// console.log(user1._password);

const User = {
    _email : "anandu235@gmail.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const user1 = Object.create(User)
console.log(user1.email);