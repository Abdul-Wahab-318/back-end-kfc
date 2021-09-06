const productSchema = require('../schema/productSchema') 
const mongoose = require("mongoose")

//GET ALL PRODUCTS
exports.getAllProducts = async (req,resp)=>{
    if(1)
    resp.status(200).json({
        message: "request entertained"
    })
    let allProducts = await productSchema.find()
    resp.status(200).json({
        message:"success",
        allProducts
    })
}

//GET SINGLE PRODUCT
exports.getProduct = async (req, res)=>{
    try{
        let product = await productSchema.findById(req.params.id)
        res.status(200).json({
            product
        })
    }
    catch(e){
        res.status(400).json({
            error: e.errors,
            message: "failed"
        })
    }
}

// DELETE A PRODUCT
exports.deleteProduct = async (req,res)=>{
    const product = await productSchema.findById(req.params.id)
    product.remove()
    res.status(200).json({
        "message": `rip`
    })
}

// CREATE A PRODUCT
exports.createProduct = async (req,res)=>{
    try{
        let product = await productSchema.create(req.body)
    
        res.status(201).json({
            "message": `Product ${product}`
        })
    }
    catch(e){
        console.log(e)
        res.status(400).json({
            message:"something is wrong i can feel it",
            error: e.errors
        })
    }
}


//UPDATE A PRODUCT
exports.updateProduct = async (req,res)=>{
    let product = await productSchema.findByIdAndUpdate(req.params.id , req.body)

    res.status(200).json({
        "message" : "updated successfully"
    })
}
