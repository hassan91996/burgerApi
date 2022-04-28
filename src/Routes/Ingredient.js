const express =require('express');
const {getIngradients} =require('../Controllers/Ingredient')
const router =express.Router()
 
router.get('/getIngredients',getIngradients)


module.exports=router