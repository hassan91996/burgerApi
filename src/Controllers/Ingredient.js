const Ingredient=require('../Models/ingredient');

const getIngradients= async(req,res)=>{
    const Ingredients= await Ingredient.find({})
   res.send(Ingredients)

}
  

module.exports={
    getIngradients
}
