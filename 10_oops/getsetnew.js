class User{
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(newName){
        const [first,last] = newName.split(" ")// array-destructure
        this.firstName = first
        this.lastName = last
        console.log(`Current fullname is : ${this.fullName}`);
    }
}

const user1 = new User("Ananda","Krishnan")
console.log(user1.fullName);
user1.fullName = "MS Dhoni"
console.log(user1.firstName,user1.lastName);

