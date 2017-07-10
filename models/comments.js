const Sequelize = require("sequelize");
const sql = require("../util/sql.js");
const User = require("./users.js");
const Likes = require("./likes.js");

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

Comments.hasMany(Likes);

module.exports = Comments;
