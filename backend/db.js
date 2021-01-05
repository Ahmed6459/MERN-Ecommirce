const mongoose = require("mongoose");


const connectDB = async()=>{
    
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true ,
            useFindAndModify:true,
            useCreateIndex: true,
            useUnifiedTopology: true
           })
           console.log(`Mongo connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Error ${error.message}`.red.bold)
        process.exit(1)
    }
}

module.exports = connectDB;