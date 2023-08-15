const{sign, verify}= require('jsonwebtoken')// sign is used to create a secret key that will allow you to encrypt your password
require("dotenv").config()
function createToken(user){
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },process.env.SECRET_KEY,
    {
        expiresIn:'1h'
    }
    )
}

module.exports={
    createToken
}


// function VerifyAToken(req,res,next){
// const token =req.headers["authorization"].

// }






//middle ware need next tell us it a middle ware function to continue a for loop

//a payload is information coming from the user(user object)
// use process to get secret key
// sign allows us to pass a payload




