const jwt = require("jsonwebtoken");


exports.generateToken = (id)=>{
    return(
        jwt.sgin({id},process.env.JWT_SECRET,{
            expiresIn:"1h"
        })
    )
}