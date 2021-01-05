const mongoose = require("mongoose")
const donenv = require("dotenv")
const colors = require("colors")
const products = require("./products");
const users = require("./model/dummyData/users")
const User = require("./model/userModel")
const Product = require("./model/productModel")
const Order = require("./model/orderModel")
const connectDB = require("./db");

donenv.config();

connectDB();

const importDate = async ()=>{
    try {

        await Product.deleteMany()
        await User.deleteMany()

        const createUsers = await User.insertMany(users)
        const adminUser = await createUsers[0]._id
        const sampleProducts = products.map((product)=>{
            return{...Product,adminUser}
        })

        await Product.insertMany(sampleProducts)
        console.log("data imported".green.inverse);
        process.exit()
        
    } catch (error) {

        console.error(`${error}`.red.inverse);
        process.exit(1)
        
    }
}

const clearDate = async ()=>{
    try {

        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        await Product.insertMany(sampleProducts)
        console.log("Data Cleared".green.inverse);
        process.exit()
        
    } catch (error) {

        console.error(`${error}`.red.inverse);
        process.exit(1)
        
    }
}

if(process.arch[2]==="-d"){
    clearDate()
}else{
    importDate()
}