
const express = require("express")
const router = express.Router()
const verify = require('../utils/verifyToken');

let bookController = require("../controllers/bookController")

router.get("/", bookController.bookList)

module.exports = router