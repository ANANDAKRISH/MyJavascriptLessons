const tinderUser = {}
tinderUser.id = "abc@123"
tinderUser.name = "lokesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "jojo@outlook.com",

    fullName: {
        userFullName: {
            firstName: "jomon",
            lastName: "menden"
        }
    },

    id: "ok09i"
}

console.log(regularUser.fullName)
console.log(regularUser.fullName.userFullName)
console.log(regularUser.fullName.userFullName.firstName)