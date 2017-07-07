const Sequelize = require("sequelize");
const sql = require("../utility/sql");
const User = require("./users.js");
const Likes = require("./likes.js");


const Photos = sql.define("photos", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	user: {
		type: Sequelize.STRING,
		notNull: true,
	},
});

Photos.hasOne(User);
Photos.hasMany(Likes);


module.exports = Photos;
