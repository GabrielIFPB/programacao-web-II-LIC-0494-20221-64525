 const express = require("express")
 const router = express.Router()

 let bookController = require("../controllers/bookController")

 router.get("/", bookController.bookList)

 module.exports = router