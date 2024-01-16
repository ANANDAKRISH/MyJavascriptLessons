// console.log(JsUser.location)
// console.log(JsUser["location"])

// console.log(JsUser.fullName)
// console.log(JsUser["fullName"])

// console.log(JsUser["House Name"])

// JsUser.email = "anandu236@outlook.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
// JsUser.email = "anandu234@ghail.com"
// console.log(JsUser.email);

const mySym = Symbol("key1")
const JsUser = {
    name:"anand",
    age: 24,
    location:"kodungallur",
    email: "anandu235@gmail.com",
    isLoggedIn: "false",
    lastLoginDays: ["monday","tuesday"],
    [mySym]: "mykey1"
}

JsUser.greeting = function(){
    console.log("Hello my boy , Good Morning");
    return "get out"
}
// console.log(JsUser.greeting)
// console.log(JsUser.greeting())
console.log(JsUser)

JsUser.greetingTwo = function(){
    console.log(`Hello my location is ${this.lastLoginDays[0]}`)
}
console.log(JsUser.greetingTwo());
