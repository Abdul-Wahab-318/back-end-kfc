const express = require("express")
let router = express.Router()
const {getAllProducts , deleteProduct , createProduct , updateProduct, getProduct} = require("../controllers/productController")


//GET ALL PRODUCTS
router.route("/products").get(getAllProducts)

//GET SINGLE PRODUCT
router.route("/products/productID/:id").get(getProduct)

//DELETE PRODUCT
router.route("/delete/:id").delete(deleteProduct)

//CREATE A PRODUCT 
router.route("/create").post(createProduct)

//UPDATE A PRODUCT
router.route("/update/:id").put(updateProduct)
module.exports = router