const express = require("express");
const color = require("colors")
const dotEnv = require("dotenv");
const cors = require("cors")
const connectDB = require("./db")
const productRouter = require("./routes/productRouter");

const app = express()
app.use(cors())
// dotenv set up
dotEnv.config()

//data base setup
connectDB();

app.get("/",(req,res)=>{
    res.send("hello worled")
})

app.use("/api/products",productRouter)


const PORT = process.env.PORT;

app.listen(PORT,console.log(`i am listing to ${PORT}`.green.underline.bold))