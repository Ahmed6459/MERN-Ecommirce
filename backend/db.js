const mongoose = require("mongoose");


const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })

        console.log(`mongo DB connected ${conn.connection.host}`.green.underline);
    } catch (error) {
        
        console.error(error.message);
        process.exit(1)
    }
}

module.exports = connectDB;