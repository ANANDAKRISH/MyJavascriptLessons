// const course ={
//     courseName: "JS",
//     courseInstructor: "hitesh",
//     courseFees: 999,
//     courseDuration: "3 months"
// }

// // console.log(course.courseInstructor);
// // console.log(course["courseFees"]);

// const {courseName} = course
// console.log(courseName)

// const {courseFees} = course
// console.log(courseFees)

// const {courseInstructor: instructor} = course
// console.log(instructor)

// console.log("j"kiṭṭṭṭ"");\
// "hmsbdsbdmsbcbs"

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

const userDetails = {
    username : "anand235",
    loginCount: 8,
    isLoggedIn: true,
    allDetails : function(){
        console.log(`username:${this.username} , logincount:${this.loginCount}`);
    }
}

Object.defineProperty(userDetails,"username",{
    writable: false,
    enumerable:false
})

console.log(Object.entries(userDetails));

for(let [key,value] of Object.entries(userDetails)){
    if (typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}

