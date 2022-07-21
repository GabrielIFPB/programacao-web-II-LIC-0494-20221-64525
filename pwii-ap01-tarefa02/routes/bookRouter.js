
const express = require("express")
const router = express.Router()
const verify = require('../utils/verifyToken')

let bookController = require("../controllers/bookController")

router.get("/", bookController.bookList)
router.post("/", verify, bookController.bookCreated)
router.put("/:id", verify, bookController.bookUpdate)
router.delete("/:id", verify, bookController.bookDelete)
router.get("/:id", verify, bookController.bookFindById)

module.exports = router