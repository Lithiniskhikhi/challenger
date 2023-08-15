const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
//Import all models objects model import the indexs and is exporting a object of users
const {users} = require('../model')
//User Router
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req,res)
})
routes.post('/register', bodyParser.json(),(req, res)=>{
       users.register(req ,res)
})
routes.put('/user:id', bodyParser.json(),()=>{
    users.updateUser(req, res)
})
routes.patch('/user:id', bodyParser.json(),()=>{
    users.updateUser(req, res)
})
routes.delete('/user:id',(req ,res)=>{
    users.deleteUser(req, res)
})
module.exports = {
    express,
    routes
}