 const express = require("express")
 const router = express.Router()
 const verify = require('../utils/verifyToken')

 let bookController = require("../controllers/bookController")

 router.get("/", verify, bookController.bookList)
 router.post("/", bookController.bookCreated)
 router.put("/:id", bookController.bookUpdate)
 router.delete("/:id", bookController.bookDelete)
 router.get("/:id", bookController.bookFindById)

 module.exports = router