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

function verifyAToken(req, res, next){
    /*
    To prevent undefined error, place ?. before your property.
    */
   try{
        // Retrieve token from req.headers
        console.log("Get token from req.headers['authorization']");
        const token = req.headers["authorization"]
        console.log(token);
        next()
   }catch(e){
        res.json({
            status: res.statusCode,
            msg: e.message
        })
   }
}



module.exports={
    createToken,
    verifyAToken

}


// function VerifyAToken(req,res,next){
// const token =req.headers["authorization"].

// }


//suki suki daisuki



//middle ware need next tell us it a middle ware function to continue a for loop

//a payload is information coming from the user(user object)
// use process to get secret key
// sign allows us to pass a payload




