//Users
//import db connection
const db = require("../config")
const {
    hash,
    compare,
    hashSync
} = require('bcrypt') //hash allows us to encrypt password and salt is how long and it default is ten
// compare is used to compare the two values to see if they are valid
const {
    createToken
} = require('../middleware/authenticateUser')
class Users {
    fetchUsers(req, res) {
        const query =
            `
    SELECT userID , firstName ,
    lastName, gender, userDOB ,
    emailADD, profileLUrl
    FROM Users;
    `
        db.query(query,

            (err, results) => {
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
            })
    } //single user
    fetchUser(req, res) {
        const query =
            `
    SELECT userID , firstName ,
    lastName, gender, userDOB ,
    emailADD, profileLUrl
    FROM Users
    WHERE userID = ${req.params.id};
    `
        db.query(query,
            (err, results) => {
                if (err) throw err
                res.json({
                    st
                })
            })
    }
    login(req, res) {

    }
    login(req, res) {
        const {
            emailAdd,
            userPass
        } = req.body
        // query
        const query = `
        SELECT firstName, lastName,
        gender, userDOB, emailAdd, userPass,
        profileLUrl
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `

        db.query(query, async (err, result) => {
            if (err) throw err
            if (!result?.length) {
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            } else {
                compare(userPass,
                    result[0].userPass,
                    (cErr, cResult) => {
                        if (cErr) throw cErr
                        // Create a token
                        const token =
                            createToken({
                                emailAdd,
                                userPass
                            })
                        // Save a token
                        res.cookie("LegitUser",
                            token, {
                                maxAge: 3600000,
                                httpOnly: true
                            })
                        if (cResult) {
                            res.json({
                                msg: "Logged in",
                                token,
                                result: result[0]
                            })
                        } else {
                            res.json({
                                status: res.statusCode,
                                msg: "Invalid password or you have not registered"
                            })
                        }
                    })
            }
        })
    }
    async register(req, res) {
        const data = req.body
        //encrypt password
        data.userPass = await hash(data.userPass, 15)
        //payload (data coming from the user)
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        //query 
        const query = `
        INSERT INTO Users
        SET ?
        `
        db.query(query,
            [data], (err) => {
                if (err) throw err
                //create token
                let token = createToken(user)
                res.cookie("LegitUser", token, {
                    maxAge: 36000000,
                    httpOnly: true, //available only on browser
                })
                res.json({
                    msg: "You are now registered"
                })
            })
    }

    UpdateUser(req, res) {
        const data = req.body 
        if (data.userPass){
            data.userPass =
            hashSync(data.userPass,15)
        }
        const query =`
        UPDATE Users
        SET ?
        WHERE userID
        `

        db.query(query,
            [data, req.param.id],
            (err)=> {
                
            }
            )
        
    }
}

// db.query
//passing a object
//not the same name data:result
//create a key of results and the results has value
//question asking a q and waiting for a response'
// middle ware allows us to add new features
//you can use cookie on a verifying password
//asynchronous allows us to run multiple task at the same time  
//and await allows us to start the second task while waiting for the first to finish 

module.exports = Users