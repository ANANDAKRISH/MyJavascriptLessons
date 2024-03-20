// function outer(){
//     const user1 = "anand"
//     const user2 = "hitesh"
//     function inner1(){
//         const user3 = "vishnu"
//         console.log(user1);
//     }

//     function inner2(){
//         const user4 = "vijay"
//         console.log(user2);
//         function innerinner(){
//             console.log("INNER-INNER CALLED");
//             console.log(user1);
//             console.log(user2);
//             console.log(user4);
//             inner1()
//         }
//         innerinner()
//         inner1()
//     }

//     inner1()
//     inner2()
// }
// outer()

function makeFunc(){
    const name = "mozilla"
    function displayName(){
        console.log(name);
    }

    return displayName;
}

// const myFunc = makeFunc()
// myFunc()

makeFunc()