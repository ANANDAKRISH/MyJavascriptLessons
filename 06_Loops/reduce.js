const shoppingCart = [
    {
        courseName: "ML mastery",
        price: 2000
    },
    {
        courseName: "Java beginner",
        price: 2500
    },
    {
        courseName: "Web dev ninja",
        price: 3000
    },
    {
        courseName: "Master of JS",
        price: 3500
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price , 0)
console.log(priceToPay);


