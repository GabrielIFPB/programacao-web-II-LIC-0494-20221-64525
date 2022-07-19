
const db = require("../config/db.config")
const Book = db.book

exports.bookList = async(req, res) => {
	try {
		const books = await Book.findAll()
		res.json({ books: books })
	} catch (err) {
		res.send({ message: err.message })
	}
}

exports.bookCreated = async(req, res) => {
	try {
		await Book.create(req.body)
		res.status(201).send()
	} catch (err) {
		res.send({ message: err.message })
	}
}

exports.bookUpdate = async(req, res) => {
	try {
		await Book.update(req.body, {
			where: {
				id: req.params.id
			}
		})
		res.status(204).send()
	} catch (err) {
		res.send({ message: err.message })
	}
}

exports.bookDelete = async(req, res) => {
	try {
		await Book.destroy({
			where: {
				id: req.params.id
			}
		})
		res.status(204).send()
	} catch (err) {
		res.send({ message: err.message })
	}
}

exports.bookFindById = async(req, res) => {
	try {
		const book = await Book.findByPk(req.params.id)
		res.json({ book: book})
	} catch (err) {
		res.send({ message: err.message })
	}
}

exports.bookFindByName = async(req, res) => {
	try {
		const book = await Book.findOne(req.params.name)
		res.json({ book: book})
	} catch (err) {
		res.send({ message: err.message })
	}
}