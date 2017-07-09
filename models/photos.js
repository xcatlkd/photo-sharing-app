const Sequelize = require("sequelize");
const sql = require("../utility/sql");
const User = require("./users.js");
const Likes = require("./likes.js");


const Photos = sql.define("photos", {
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

Photos.hasOne(User);
Photos.hasMany(Likes);


module.exports = Photos;
