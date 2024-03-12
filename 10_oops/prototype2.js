const user = {
    name:"anand",
    loginCount: 8
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "JS assignment",
    fullTime :  true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user
Object.setPrototypeOf(TeachingSupport,Teacher)

// console.log(TAsupport.prototype);
// console.log(TAsupport.name);
// console.log(TAsupport.isAvailable);
// console.log(TeachingSupport.makeVideo);
// console.log(TAsupport.makeVideo);

const myName = "  anand   "
const petName = " kumble    "

String.prototype.trueLength = function(){
    console.log(`True length of ${this} is ${this.trim().length}`);
}

myName.trueLength()
petName.trueLength()