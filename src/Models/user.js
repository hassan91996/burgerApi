const mongoose = require('./mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')



const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("inValied Email")
            }
        }

    },
    password: {
        type: String,
        required: true
    }
})


userSchema.methods.generatAuthToken= function(){
    user=this
    const expiresIn=3600;
   const token = jwt.sign({id:user._id},process.env.JWT_SEC,{expiresIn:expiresIn})
 return {token,expiresIn}
}


userSchema.statics.findUser = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Email dosent exist')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw new Error('Invalid password')
    }

    return user
}

userSchema.pre('save', async function (next) {
    user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 12);
    }
    next();
})



const User = mongoose.model('Users', userSchema);

module.exports = User;