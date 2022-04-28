const mongoose=require('./mongoose');
const OrderSchema=mongoose.Schema({
  price:{
        type:Number,
        required:true
    },
    Ingredients:{ 
      type:Object,
      required:true
        
    },
    OrderData:{
        Name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        zipcode:{
            type:Number,
            required:true
        },
        deleveryMethod:{
            type:String,
            required:true,
           
        }
    },
    owner:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:'Users'
    }
});

 const Order=mongoose.model('Orders',OrderSchema);



module.exports =Order;