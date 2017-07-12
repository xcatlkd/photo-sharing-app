const Sequelize = require("sequelize");
const sql = require("../util/sql.js");
const User = require("./user.js");
const Photo = require("./photo.js");


const Like = sql.define("like", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
});


// Likes.hasMany(Photos);

// Likes.hasOne(User);


module.exports = Like;
