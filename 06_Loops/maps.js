// myMap = new Map()
// myMap.set("name","anand")
// myMap.set("Roll_No",7)
// myMap.set("Country","India")

// const myObj = {
//     "name": "anand",
//     "country": "India",
//     roll_No : 12

// }

// for (const itr of myObj) {
//     console.log(itr);
// }




// const myObj = {
//     python : "py",
//     java : "java",
//     Javascript: "js"
// }

myMap = new Map()
myMap.set("name","anand")
myMap.set("Roll_No",7)
myMap.set("Country","India")

for (const key in myMap) {
    console.log(key);
}