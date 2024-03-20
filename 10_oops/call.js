function setUserName(username){
    this.username = username
}

function setUserDetails(username,email,password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

const user1 = new setUserDetails("anandu","anandu235@gmail.com","kolambi908")
console.log(user1);

