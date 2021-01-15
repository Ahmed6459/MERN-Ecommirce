const express = require("express")
const mongoose = require("mongoose")
const Products = require("../model/productModel")
const router = express.Router()
const asyncHandler = require("express-async-handler")

//@desc Fetch all products
//@rout GET api/products
//@acc  puplic
router.get("/",asyncHandler(async(req,res)=>{
    const products = await Products.find({})
    // res.status(401)
    // throw new Error("not authorized")
    res.json(products)
}) )

//@desc Fetch one product
//@rout GET api/products/:id
//@acc  puplic

router.get("/:id",asyncHandler(async(req,res)=>{
    const product = await Products.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404).json({messag:"product not found"})
    }
    
}))


module.exports = router
