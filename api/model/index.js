//Import all models 
const Users = require('./Users')
const Orders = require('./Orders')
const Books = require('./Books')
const BookAuthors = require('./BookAuthors')
const routes = express.Router1()
// export all
module.export={
    users: new Users(),
}

const express = require('express')
const bodyParser = require('body-parser')


//Import all models objects
const{users} = require ('.') // model will import the index file 
//===
routes.get('/users',(req,res)=>{
    users.fetchUsers(req,res)
})

route.get('/user/:id'),(req,res)=>{
    users.fetchUsers
}

routes.post('./register', bodyParser.json(),(req, res)=>{
    users.register(req ,res)
})
routes.put('/user:id', bodyParser.json(),()=>{
 users.updateUser(req, res)
})

routes.delete('/user/:id',(req,res)=>{

    users.deleteUser(req,res)
})

module.export = {
    express,
routes
}
