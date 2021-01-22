const express = require("express")
const router = express.Router()
const {authUser,signin} = require("../controllers/userController")


router.post("/login",authUser)
router.post("/singin",signin)


module.exports = router;
