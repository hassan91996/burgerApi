const express =require('express');
const auth=require('../middleware/auth')

const {SavrOrder,getOrders} =require('../Controllers/Order')


const router =express.Router()
 

router.post('/save',auth,SavrOrder);
router.get('/',auth,getOrders);

module.exports=router