// const myArr = new Array(1,2,3,4,5)

// // myArr.push(6)
// // myArr.pop()
// // myArr.unshift(9)
// // myArr.shift()
// // console.log(myArr.includes(5))
// // console.log(myArr.indexOf(1));
// const newArr = myArr.join('-')
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// const myArr = [1,2,3,4,5,6]

// const arr1 = myArr.slice(1,4)
// console.log("Source Array:", myArr)
// console.log("Sliced Array:",arr1)
 
// console.log("-----------------------");

// const arr2 = myArr.splice(1,4)
// console.log("Source Array:",myArr)
// console.log("Spliced Array:",arr2)

const originalArray = [1, 2, 3, 4, 5, 6]
const splicedArray = originalArray.splice(1, 3, 'a', 'b','c');
console.log(originalArray); 
console.log(splicedArray);
