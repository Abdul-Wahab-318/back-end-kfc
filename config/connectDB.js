const mongoose = require("mongoose")

const connectDB = async ()=>{
    await mongoose.connect("mongodb://localhost/kfc", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(con => console.log("connected to kfc database"))
}

/*
const connectDB = async ()=>{
    await mongoose
    .connect("mongodb+srv://wahabmaliq:steel321@cluster0.kwevt.mongodb.net/kfc?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(con => console.log("connected to kfc database"))
}*/

module.exports = connectDB

//mongodb+srv://wahabmaliq:tictac809@cluster0.kwevt.mongodb.net/kfc?retryWrites=true&w=majority