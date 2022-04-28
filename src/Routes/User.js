const express =require('express')

const Router=express.Router();



const {addUser,login} =require('../Controllers/User')

Router.post('/adduser',addUser);
Router.post('/login',login);

module.exports=Router