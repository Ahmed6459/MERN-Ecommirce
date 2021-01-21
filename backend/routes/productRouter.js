const express = require("express")
const router = express.Router()
const {getProducts,getProductByID} = require("../controllers/productController") //the controller 

//get product router

router.get("/",getProducts)

//get product by id router
router.get("/:id",getProductByID)


module.exports = router
