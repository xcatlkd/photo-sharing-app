const Sequelize = require("sequelize");
const sql = require("../util/sql.js");
const User = require("./users.js");


const Comments = sql.define("comments", {
	id: {
		type: Sequelize.INTEGER,
		notNull: true,
		primaryKey: true,
		autoIncrement: true,
	},
	text: {
		type: Sequelize.STRING,
		notNull: true,
	},
});
