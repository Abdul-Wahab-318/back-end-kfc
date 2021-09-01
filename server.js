const express = require("express")
let app = express()

//CONNECT TO DATABASE
let connectDb = require("./config/connectDB")
connectDb()

//COOKIE PARSER
let cookieParser = require("cookie-parser")
app.use(cookieParser())
//USE CORS
let cors = require("cors")
app.use(cors({
    origin:['http://localhost:3001' , 'http://localhost:3000'],
    credentials: true
}))

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

//ORDER ROUTE
let orderRoute = require("./routes/orderRoute")
app.use("/kfc", orderRoute)

//ADMIN ROUTE
let adminRoute = require("./routes/adminRoute")
app.use('/kfc',adminRoute)