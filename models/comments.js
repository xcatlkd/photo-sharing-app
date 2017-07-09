const Sequelize = require("sequelize");
const sql = require("../utility/sql");
const User = require("./users.js");
const Likes = require("./likes.js");

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

Comments.hasMany(Likes);

module.exports = Comments;
