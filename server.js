const express = require("express")
let app = express()

//CONNECT TO DATABASE
let connectDb = require("./config/connectDB")
connectDb()


//USE CORS
let cors = require("cors")
app.use(cors())

//JSON MIDDLEWARE
app.use(express.json())

//LISTEN AT PORT
const PORT = 8000
app.listen(PORT , console.log(`server running on ${PORT}`))

//PRODUCT MIDDLEWARE
let productRoute = require("./routes/productRoute")
app.use("/kfc" , productRoute)

//USER ROUTE
let userRoute = require("./routes/userRoute")
app.use("/kfc" , userRoute )