const Sequelize = require("sequelize");
const sql = require("../util/sql.js");
const User = require("./user.js");
const Like = require("./like.js");



const Photo = sql.define("photo", {
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	size: {
		type: Sequelize.INTEGER,
		notNull: true,
	},
	originalName: {
		type: Sequelize.STRING,
		notNull: true,
	},
	mimeType: {
		type: Sequelize.STRING,
		notNull: true,
	},
});


// Photos.hasMany(Likes);

module.exports = Photo;
