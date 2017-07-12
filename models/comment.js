const Sequelize = require("sequelize");
const sql = require("../util/sql.js");
const User = require("./user.js");
const Like = require("./like.js");

const Comment = sql.define("comment", {
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

Comment.hasMany(Like);

module.exports = Comment;
