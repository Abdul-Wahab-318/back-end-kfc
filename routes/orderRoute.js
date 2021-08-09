const express = require("express")
let router = express.Router()
const { placeOrder, getAllOrders, deleteOrder } = require("../controllers/orderController")
const { isAuthenticated } = require("../middleware/auth")

//PLACE ORDER
router.route("/order").post(isAuthenticated,placeOrder)

//GET ALL ORDERS
router.route("/order/getAll").get(getAllOrders)

//WHEN ORDER COMPLETE
router.route("/order/complete/:id").delete(deleteOrder)

module.exports = router