const {Sequelize} = require("sequelize");

let book = {
	id: {
		type: Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		allowEmpty: false
	},
	isbn: {
		type: Sequelize.STRING,
		allowNull: false,
		allowEmpty: false
	},
	anoPublicacao: {
		type: Sequelize.STRING,
		allowNull: false,
		allowEmpty: false
	},
	numeroPaginas: {
		type: Sequelize.STRING,
		allowNull: false,
		allowEmpty: false
	}
}

module.exports = (sequelize) => {
	return sequelize.define("book", book)
}
