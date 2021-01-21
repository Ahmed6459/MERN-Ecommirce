const express = require("express");
const color = require("colors")
const dotEnv = require("dotenv");
const cors = require("cors")
const connectDB = require("./db")
const productRouter = require("./routes/productRouter"); //productRouter
const userRouter = require("./routes/userRouter") //userRouter

// dotenv set up
dotEnv.config()
//data base setup
connectDB();
const app = express()
app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello worled")
})

app.use("/api/products",productRouter) //product 

app.use("/api/users",userRouter)


const PORT = process.env.PORT;

app.listen(PORT,console.log(`i am listing to ${PORT}`.green.underline.bold))