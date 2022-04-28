const User = require('../Models/user')
const jwt = require('jsonwebtoken')




const addUser = async (req, res) => {
    let user = new User(req.body)
    try {
        await user.save();
        const token =   user.generatAuthToken();
        res.status(201).send({userId:user._id,token:token.token,expiresIn:token.expiresIn})

    } catch (error) {
        res.status(400).send(error.message)
    }

}

const login = async (req, res) => {
    try {
        const user = await User.findUser(req.body.email, req.body.password)
        const token =   user.generatAuthToken();
        res.status(200).send({userId:user._id,token:token.token,expiresIn:token.expiresIn})


    }
    catch (error) {
        res.status(400).send(error.message)
    }

}






module.exports = { addUser, login }