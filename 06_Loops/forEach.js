
// programming.forEach(function(itr) {
//     itr = itr+" is fantastic"
//     console.log(itr);
// })

// console.log("----------------------------");

// programming.forEach( (itr)=>{
//     itr = itr+" is top-notch"
//     console.log(itr);
// } )

// function printMe(item){
//     console.log(item);
// } 

// programming.forEach(printMe)



// const programming = ['js','cpp','py','java']

// programming.forEach( (item,index,arr) => {
//     console.log(`${item} is present at index ${index} inside the array of these elements: ${arr}`);
// })



const arrObj = [
    {
        language: "Python",
        extension: "py"
    },
    {
        language: "Java",
        extension: "java"
    },
    {
        language: "C++",
        extension: "cpp"
    }
]

arrObj.forEach( (item)=>{
    console.log(item.language);
} )

