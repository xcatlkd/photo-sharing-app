const Sequelize = require("sequelize");
const sql = require("../utility/sql");
const Photos = require("./photos.js");
const Comments = require(".comments.js");


const Users = sql.define("user", {
	username: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	password: {
		type: Sequelize.STRING,
		notNull: true,
	},
});

Users.hasMany(Photos);
Users.hasMany(Comments);

module.exports = Users;
