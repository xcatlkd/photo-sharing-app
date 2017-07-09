const Sequelize = require("sequelize");
const sql = require("../util/sql.js");
const User = require("./users.js");
const bodyParser = require('body-parser');


const Comments = sql.define("comments", {
	id: {
		type: Sequelize.INTEGER,
		notNull: true,
		primaryKey: true,
	},
	text: {
		type: Sequelize.STRING,
		notNull: true,
	},
});
