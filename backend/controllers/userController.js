const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs")
const {generateToken} = require("../utils/gineratToken")

exports.signin = asyncHandler (async(req,res)=>{
    const{name,email,pass} = req.body;
    
    console.log(name,email,pass);
        const user =  await User.create({
            email:email,
            pass:pass,
            name:name
        })
        console.log(user);

        try {
            const newUser = await user.save()
            res.status(200).json(go(true,"User Created",newUser))
        } catch (error) {
            console.log(error);
        }

    
})

exports.authUser = asyncHandler(async(req,res)=>{
    const{email,pass}=req.body
    const user = await User.findOne({email})

    if(user&& (await User.matchPassword(pass)) ){
        res.json({
            _id:User._id,
            name:User.name,
            email:User.email,
            isAdmin:User.isAdmin,
            token:generateToken(User._id)
        })
    }else{
        res.status(401)
        throw new Error("invalid email or password");
    }

})
