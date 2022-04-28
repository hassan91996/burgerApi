const Order =require('../Models/Order')


const SavrOrder=async(req,res)=>{
  let order=new Order({
      ...req.body,
      owner:req.user
  });
   try {
       await order.save();
       res.status(201).send(order)
   } catch (e) {
    res.status(400).send(error.message)
     
   }

}
const getOrders=async(req,res)=>{
   try {
    const  orders= await Order.find({owner:req.user._id});
       res.status(200).send(orders)
   } catch (error) {
    res.status(400).send(error.message);
   }

}

module.exports={
    SavrOrder,getOrders
}