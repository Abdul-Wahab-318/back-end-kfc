const orderSchema = require('../schema/orderSchema')

//PLACE ORDER
exports.placeOrder = async (req,res)=>{
    try{
        let order = await orderSchema.create(req.body)
        res.status(200).json({
            message: "order placed successfully",
            dumbCookie : req.cookies
        })
    }catch(e){
        res.status(400).json({
            message: "nope",
            error: e.errors
        })
    }
}


//GET ALL ORDERS
exports.getAllOrders = async (req,res)=>{
    try{
        let orders  = await orderSchema.find()
        res.status(200).json({
            orders
        })
    }
    catch(e)
    {
        res.status(400).json({
            message: "something went wrong . Please try again",
            e
        })
    }
}


//DELETE AN ORDER (COMPLETE ORDER)
exports.deleteOrder = async (req,res) =>{
    try{
        let order = await orderSchema.findByIdAndDelete(req.params.id)
        if(!order)
        res.status(400).json({message: "order not found"})
    
        res.status(200).json({message: "order completed"})
    }
    catch(e){
        res.status(400).json({
            message: "mission failed",
            error : e
        })
    }
}