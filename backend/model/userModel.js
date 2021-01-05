const mongoose =  require ("Mongoose") ;

const userSchema = mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{timestamps:true})

const User  = mongoose.model("User",userSchema);

module.exports = User;