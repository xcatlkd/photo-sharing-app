const Sequelize = require("sequelize");
const sql = require("../utility/sql");
const User = require("./users.js");


const Comments = sql.define("comments", {
	id: {
		type: Sequelize.INTEGER,
		notNull: true,
	},
	text: {
		type: Sequelize.STRING,
		notNull: true,
	},
});
