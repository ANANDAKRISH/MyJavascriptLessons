// shallow copy
// const ingredientsList = [1,"noodles", { list: ["eggs", "flour", "water"] }];
// const ingredientsListCopy = Array.from(ingredientsList);

// ingredientsList[0] = 100
// ingredientsListCopy[2].list = ["banana","apple"]
// ingredientsListCopy[2] = {list:[1,2,3]}

// console.log(ingredientsListCopy);
// console.log(ingredientsList);

// deep copy
// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
// const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));

// ingredientsList[0] = "roti"
// ingredientsListDeepCopy[1].list = ["paneer","soya"]
// ingredientsList[1].list[0] = "paneer"
// console.log(ingredientsList);
// console.log(ingredientsListDeepCopy);

// = vs shallow vs deep copy

// let a = [1,"apple",["anand","best","boy"]]

// let b = a
// let aShallowCopy = Array.from(a)
// let aDeepCopy = JSON.parse(JSON.stringify(a))

// a[2] = "done" 
// console.log(b)
// console.log(a)
// console.log(aShallowCopy)
// console.log(aDeepCopy)

let a = "apple"
let b = "apple"
let c = a
console.log(a==c)