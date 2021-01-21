const Products = require("../model/productModel"),
    asyncHandler= require("express-async-handler");


//@desc Fetch all products
//@rout GET api/products
//@acc  puplic

exports.getProducts = asyncHandler(async(req,res)=>{
    const products = await Products.find({})
    res.json(products)
})


//@desc Fetch one product
//@rout GET api/products/:id
//@acc  puplic
exports.getProductByID = asyncHandler(async(req,res)=>{
    const product =await Products.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error("product not found")
    }

})

