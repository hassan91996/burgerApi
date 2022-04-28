const jwt = require('jsonwebtoken')
const User = require('../Models/user')


const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            throw new Error()
        }
        const decoded = jwt.verify(token, process.env.JWT_SEC)
        const user = await User.findOne({ _id: decoded.id })
        if (!user) {
            throw new Error()
        }
        req.user = user
        next();
    }
    catch (error) {
        res.status(401).send({ error: 'please auth' })
        console.log(error)
    }


}

module.exports = auth