const mongoose=require('./mongoose');
const gradientSchema=mongoose.Schema({
    Name:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    count:{
        type:Number,
        required:true
    }
});

const Ingredient=mongoose.model('Ingredients',gradientSchema);



module.exports =Ingredient;